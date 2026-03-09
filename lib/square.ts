import { SquareClient, SquareEnvironment } from "square";

let _client: SquareClient | null = null;

export function getSquareClient(): SquareClient {
  if (_client) return _client;

  const token = process.env.SQUARE_ACCESS_TOKEN;
  if (!token) {
    throw new Error("SQUARE_ACCESS_TOKEN environment variable is not set");
  }

  const isSandbox = process.env.SQUARE_ENVIRONMENT === "sandbox";

  _client = new SquareClient({
    token,
    environment: isSandbox
      ? SquareEnvironment.Sandbox
      : SquareEnvironment.Production,
  });

  return _client;
}
