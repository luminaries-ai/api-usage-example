/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest.js";
import { FetchHttpRequest } from "./core/FetchHttpRequest.js";
import type { OpenAPIConfig } from "./core/OpenAPI.js";
import { BotsService } from "./services/BotsService.js";
import { ConversationsService } from "./services/ConversationsService.js";
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ApiClient {
  public readonly bots: BotsService;
  public readonly conversations: ConversationsService;
  public readonly request: BaseHttpRequest;
  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "https://api.luminaries.ai",
      VERSION: config?.VERSION ?? "0.0.1",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });
    this.bots = new BotsService(this.request);
    this.conversations = new ConversationsService(this.request);
  }
}
