import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function GET() {

  const result = await generateText({
    model: openai("gpt-4.1-mini"),
    prompt: "Say hello from OpenAI"
  })

  return Response.json({
    text: result.text
  })
}