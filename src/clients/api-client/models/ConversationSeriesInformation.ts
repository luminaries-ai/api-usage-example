/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ConversationSeriesInformation = {
    series: {
        id: string;
        createdAt: string;
        updatedAt: string;
        organizationId: string;
        criteria: any;
        name: string;
        personaId: string;
        description?: string;
    };
    seriesSteps: Array<{
        id: string;
        createdAt: string;
        updatedAt: string;
        configuration: any;
        context: Record<string, any>;
        description?: string;
        engagementSeriesId: string;
        executionGraphId: string;
        name: string;
        position: (number | null);
    }>;
    conversationSteps: Array<{
        id: string;
        createdAt: string;
        updatedAt: string;
        engagementSeriesStepId: string;
        engagementSeriesId: string;
        messageId?: string;
        repetition: (number | null);
    }>;
    currentStep?: {
        id: string;
        createdAt: string;
        updatedAt: string;
        engagementSeriesStepId: string;
        engagementSeriesId: string;
        messageId?: string;
        repetition: (number | null);
    };
};

