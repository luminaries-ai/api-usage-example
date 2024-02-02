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
     * Create a message in a conversation
     * @returns Message The newly created message and it's corresponding response message unless skipped
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
    public getConversationMessages({
        conversationId,
        continuationToken,
        limit,
    }: {
        conversationId: string,
        continuationToken?: string,
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
    /**
     * Get a conversation
     * @returns any List the conversations
     * @throws ApiError
     */
    public getConversations({
        continuationToken,
        limit,
    }: {
        continuationToken?: string,
        limit?: number,
    }): CancelablePromise<{
        results: Array<Conversation>;
        continuationToken?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/conversations',
            query: {
                'continuationToken': continuationToken,
                'limit': limit,
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
            person?: (string | {
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
            });
            /**
             * The id of the bot that should respond
             */
            respondentId: string;
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
}
