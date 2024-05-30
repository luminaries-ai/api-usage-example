/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Message = {
    /**
     * The unique identifier for the message
     */
    id: string;
    /**
     * The message content
     */
    content: string;
    userId: string;
    userType: Message.userType;
    includeInHistory: boolean;
    organizationId: string;
    createdAt: (string | null);
    respondedAt: (string | null);
    status: Message.status;
};
export namespace Message {
    export enum userType {
        PERSON = 'person',
        BOT = 'bot',
    }
    export enum status {
        PENDING = 'pending',
        CONTENT_IN_PROGRESS = 'content_in_progress',
        IN_PROGRESS = 'in_progress',
        CONTENT_STREAMING = 'content_streaming',
        CONTENT_FAILED = 'content_failed',
        CONTENT_COMPLETED = 'content_completed',
        COMPLETED = 'completed',
        RECEIVED = 'received',
        SENDING_QUEUED = 'sending_queued',
        SENDING_IN_PROGRESS = 'sending_in_progress',
        SENDING_FAILED = 'sending_failed',
        SENDING_COMPLETE = 'sending_complete',
        RECEIVER_UNSUBSCRIBED = 'receiver_unsubscribed',
    }
}

