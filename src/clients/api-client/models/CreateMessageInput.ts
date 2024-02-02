/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateMessageInput = {
    /**
     * The message content
     */
    message: string;
    /**
     * A key value map of context to be used for the message. This can be helpful for signaling to the bot specific things about the interaction with the user. Maybe the user is on a particular page of a site, interacting with specific content or in the middle of a particular action within your system
     */
    context: Record<string, any>;
    /**
     * By default responses are generated asynchronously and the response can be streamed via the /messages/{id}/stream endpoint. If you want to skip the response, you can set this to 'skip'. If you want the response to be generated synchronously, you can set this to 'sync'
     */
    response?: CreateMessageInput.response;
};
export namespace CreateMessageInput {
    /**
     * By default responses are generated asynchronously and the response can be streamed via the /messages/{id}/stream endpoint. If you want to skip the response, you can set this to 'skip'. If you want the response to be generated synchronously, you can set this to 'sync'
     */
    export enum response {
        ASYNC = 'async',
        SKIP = 'skip',
        SYNC = 'sync',
    }
}

