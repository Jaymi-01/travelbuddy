import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, convertToCoreMessages } from "ai";

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google("models/gemini-1.0-pro"),
    messages: convertToCoreMessages(messages),
  });

  return result.toTextStreamResponse();
}
