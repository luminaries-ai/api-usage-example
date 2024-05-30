import { createApiClient } from "./clients/api-client.js";
import { getResponseFromCommandLine } from "./util/terminal.js";

if (
  !process.env.API_CLIENT_ID ||
  !process.env.API_SECRET_KEY ||
  !process.env.RESPONDENT_ID
) {
  throw new Error(
    "You must provide API_CLIENT_ID and API_SECRET_KEY environment variables"
  );
}

const client = createApiClient(
  process.env.API_CLIENT_ID!,
  process.env.API_SECRET_KEY!
);

/**
 * generate a random id to start a conversation
 */
function generateRandomId() {
  return Math.random().toString(36).substring(7);
}

const personId = generateRandomId();

/**
 * The responding bot / persona for this conversation
 */
const respondentId = process.env.RESPONDENT_ID!;

/**
 * Create a conversation between the person and the respondent
 * In your application the externalId should be the unique id of the individual as known by your system
 * If the person is "anonymous" in your system, that is alright, you can use a random or no id at all
 * The users externalId can be updated later
 *
 * Persons with identical externalId's will be automatically merged
 *
 * We recommend keeping a single threaded conversatin between person and bot and therefore we provide a uniqueId for the conversation
 * However you can provide no unique key or your own key to create different conversations
 */
const conversation = await client.conversations.createConversation({
  requestBody: {
    name: `Test conversation: ${new Date().toISOString()}`,
    botId: respondentId,
    person: {
      externalId: personId,
    },
    uniqueId: personId,
  },
});

console.log(conversation);

/**
 * This is how we get user input for the demo
 * In your application this user input might come through a form, an api or some other mechanism
 */
let userInput = await getResponseFromCommandLine(`Enter your first message: `);

async function* fetchEvents<T>(
  ...params: Parameters<typeof fetch>
): AsyncIterable<T> {
  try {
    const response = await fetch(...params);
    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`
      );
    }

    const reader = response
      .body!.pipeThrough(new TextDecoderStream())
      .getReader();

    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += value;
      const events = buffer.split("\n\n");
      buffer = events.pop() || ""; // Keep the last (possibly incomplete) event

      for (const event of events) {
        yield JSON.parse(event.slice(5)); // Assuming events are JSON-formatted
      }
    }
  } catch (err) {
    console.error(err);
    throw new Error("API request failed");
  }
}

while (userInput !== "stop") {
  /**
   * This creates a message.
   * by default the response is generated asynchronously and then your application could either poll or stream for the response.
   * For the purposes of simplicity, this demo uses the sync option to get the response immediately
   *  We recommend the async api because it has retries and failure handling built in
   */

  const events = fetchEvents<
    | {
        type: "message-start";
        /**
         * Message ID
         */
        id: string;
        /**
         * User ID
         */
        userId: string;
        /**
         * User type
         */
        userType: string;
        /**
         * Organization ID
         */
        organizationId: string;
        /**
         * Creation timestamp
         */
        createdAt: string;
        /**
         * Message status
         */
        status: string;
      }
    | {
        type: "content-delta";
        /**
         * Content delta
         */
        delta: string;
      }
    | {
        type: "message-stop";
      }
  >(
    `https://api.luminaries.ai/api/v2/conversations/${conversation.id}/stream-message`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          `${process.env.API_CLIENT_ID!}:${process.env.API_SECRET_KEY!}`
        ).toString("base64")}`,
      },
      body: JSON.stringify({
        content: userInput,
        context: {},
      }),
    }
  );

  //async iterable
  for await (const event of events) {
    console.log(event.type, event);
  }
  // const stream = await client.conversations.streamMessage({
  //   conversationId: conversation.id,
  //   requestBody: {
  //     content: userInput,
  //     context: {},
  //   },
  // });

  // console.log(stream);
  // console.log(message, response);
  // console.log(
  //   `\n==================================\nBot: ${response.content}\n==================================\n`
  // );
  userInput = await getResponseFromCommandLine(`Enter your next message: `);
}

console.log(`thanks for chatting today!`);
process.exit(0);
