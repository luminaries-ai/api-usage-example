/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateStreamingMessageInput = {
    /**
     * The users message content
     */
    content: string;
    /**
     * A key value map of context to be used for the message. This can be helpful for signaling to the bot specific things about the interaction with the user. Maybe the user is on a particular page of a site, interacting with specific content or in the middle of a particular action within your system
     */
    context: Record<string, any>;
};

