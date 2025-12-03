import { google } from "@ai-sdk/google"
import { streamText, convertToModelMessages } from "ai"
import { getServerSession } from "next-auth"

// uses next auth for nextjs
export async function POST(req: Request) {
    //Session
    const session = await getServerSession() 

    const user = session?.user
    const name = user?.name || "Guest"

    const { messages } = await req.json()
    const lastUserMessage = messages[messages.length - 1]?.content ?? ""

    // AI

    let ragContent = ""

    if(session) {
        //aint gonna happen 
    }

    // default
    // create a prompt 
    const systemPrompt = !session ? `
        You are Study Buddy, a sassy and sharp-tongued AI tutor that grills students before tutoring them on their lessons.
        If the user is not logged in, you will roast them that signing in will unlock:
        - Personalized tutoring
        - RAG capabilities
    ` : ``

    const result = streamText({
        model: google('gemini-2.5-flash'),
        messages: convertToModelMessages(messages),
        system: systemPrompt,
        maxOutputTokens: session ? 1000 : 300
    })

    return result.toUIMessageStreamResponse()
}
