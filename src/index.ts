import { createApiClient } from "./clients/api-client.js";
import { CreateMessageInput } from "./clients/api-client/index.js";
import { getResponseFromCommandLine } from "./util/terminal.js";

if (!process.env.API_CLIENT_ID || !process.env.API_SECRET_KEY || !process.env.RESPONDENT_ID) {
  throw new Error("You must provide API_CLIENT_ID and API_SECRET_KEY environment variables");
}

const client = createApiClient(process.env.API_CLIENT_ID!, process.env.API_SECRET_KEY!);

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
    respondentId: respondentId,
    person: {
      externalId: personId,
    },
    uniqueId: personId,
  }
})


/**
 * This is how we get user input for the demo
 * In your application this user input might come through a form, an api or some other mechanism
 */
let userInput = await getResponseFromCommandLine(`Enter your first message: `);

while(userInput !== 'stop') {
  /**
   * This creates a message.
   * by default the response is generated asynchronously and then your application could either poll or stream for the response.
   * For the purposes of simplicity, this demo uses the sync option to get the response immediately
   *  We recommend the async api because it has retries and failure handling built in
   */
  const [message, response] = await client.conversations.createMessage({
    conversationId: conversation.id,
    requestBody: {
      message: userInput,
      context: {},
      response: CreateMessageInput.response.SYNC,
    },
  });
  console.log(
    `\n==================================\nBot: ${response.message}\n==================================\n`
  );
  userInput = await getResponseFromCommandLine(`Enter your next message: `);
}

console.log(`thanks for chatting today!`);
process.exit(0);
