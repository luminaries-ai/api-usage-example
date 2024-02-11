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
        BOT = 'bot',
        PERSON = 'person',
    }
    export enum status {
        COMPLETED = 'completed',
        FAILED = 'failed',
        STREAMING = 'streaming',
        PENDING = 'pending',
        IN_PROGRESS = 'in_progress',
    }
}

