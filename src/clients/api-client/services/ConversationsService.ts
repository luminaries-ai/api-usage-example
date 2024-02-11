/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Conversation } from '../models/Conversation.js';
import type { CreateMessageInput } from '../models/CreateMessageInput.js';
import type { Message } from '../models/Message.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export class ConversationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a single message
     * @returns Message test
     * @throws ApiError
     */
    public getMessage({
        conversationId,
        messageId,
    }: {
        conversationId: string,
        messageId: string,
    }): CancelablePromise<Message> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/conversations/{conversationId}/messages/{messageId}',
            path: {
                'conversationId': conversationId,
                'messageId': messageId,
            },
        });
    }
    /**
     * List conversations for an organization
     * @returns any List the conversations for your organization
     * @throws ApiError
     */
    public listConversations({
        continuationToken,
        limit = 25,
        externalId,
        includeMessages,
    }: {
        /**
         * The continuationToken is a token that allows you to continue fetching results from a paginated API. If the continuation token is not provided or is empty, the API will return the first page of results.
         */
        continuationToken?: string,
        /**
         * The number of results that the API should return.
         */
        limit?: number,
        /**
         * Just get the conversations of the user identified by an external id
         */
        externalId?: string,
        /**
         * Include messages in the response
         */
        includeMessages?: boolean,
    }): CancelablePromise<{
        results: Array<(Conversation & {
            messages?: Array<Message>;
        })>;
        continuationToken?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/conversations',
            query: {
                'continuationToken': continuationToken,
                'limit': limit,
                'externalId': externalId,
                'includeMessages': includeMessages,
            },
        });
    }
    /**
     * Create a conversation
     * @returns Conversation Conversation created
     * @throws ApiError
     */
    public createConversation({
        requestBody,
    }: {
        requestBody?: {
            /**
             * A name for the conversation
             */
            name?: string;
            /**
             * The Luminaries AI Person ID
             */
            personId?: string;
            /**
             * The details of the person
             */
            person?: {
                /**
                 * Luminaries AI will use your organizations external identifier for deduplication. If none is provided, it will be left empty
                 */
                externalId?: string;
                /**
                 * The given name of the person
                 */
                givenName?: string;
                /**
                 * The family name of the person
                 */
                familyName?: string;
            };
            /**
             * The id of the bot that should respond
             */
            botId: string;
            /**
             * If you have an external unique id for the conversation
             */
            uniqueId?: string;
        },
    }): CancelablePromise<Conversation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/conversations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a message in a conversation
     * @returns Message The newly created message and it's corresponding response message if applicable
     * @throws ApiError
     */
    public createMessage({
        conversationId,
        requestBody,
    }: {
        conversationId: string,
        requestBody: CreateMessageInput,
    }): CancelablePromise<Array<Message>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/conversations/{conversationId}/messages',
            path: {
                'conversationId': conversationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Paginate messages in a conversation. Ordered in reverse chronological order.
     * @returns any test
     * @throws ApiError
     */
    public listConversationMessages({
        conversationId,
        continuationToken,
        limit = 25,
    }: {
        conversationId: string,
        /**
         * The continuationToken is a token that allows you to continue fetching results from a paginated API. If the continuation token is not provided or is empty, the API will return the first page of results.
         */
        continuationToken?: string,
        /**
         * The number of results that the API should return.
         */
        limit?: number,
    }): CancelablePromise<{
        results: Array<Message>;
        continuationToken?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/conversations/{conversationId}/messages',
            path: {
                'conversationId': conversationId,
            },
            query: {
                'continuationToken': continuationToken,
                'limit': limit,
            },
        });
    }
}
