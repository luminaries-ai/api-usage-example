import { ApiClient } from "./api-client/index.js";

export function createApiClient(
  clientId: string,
  secretKey: string,
): ApiClient {
  const client = new ApiClient({
    BASE: "http://localhost:3336",
    HEADERS: {
      authorization: `Basic ${Buffer.from(`${clientId}:${secretKey}`).toString(
        "base64"
      )}`,
    },
  });
  return client;
}
