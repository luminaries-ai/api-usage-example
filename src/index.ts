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

let userInput = await getResponseFromCommandLine(`Enter your first message: `);

while(userInput !== 'stop') {
  const [message, response] = await client.conversations.createMessage({
    conversationId: conversation.id,
    requestBody: {
      message: userInput,
      context: {},
      response: CreateMessageInput.response.SYNC
    }
  })
  console.log(`\n==================================\nBot: ${response.message}\n==================================\n`);
  userInput = await getResponseFromCommandLine(`Enter your next message: `);
}

console.log(`thanks for chatting today!`);
process.exit(0);
