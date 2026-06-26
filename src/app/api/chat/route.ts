import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    
    // Support both standard server-side variable and the client-side fallback
    const apiKey = process.env.OPENROUTER_API_KEY || process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
    
    if (!apiKey) {
      console.error("OpenRouter API Key is missing in environment variables.");
      return NextResponse.json({ error: "API key configuration missing" }, { status: 500 });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://infernex.in",
        "X-Title": "Infernex Inferno Chatbot"
      },
      body: JSON.stringify({
        model: "nvidia/llama-3.1-nemotron-70b-instruct",
        messages,
        temperature: 0.5,
        max_tokens: 400
      })
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error(`OpenRouter API response error (status ${response.status}):`, errBody);
      return NextResponse.json({ error: "Failed to communicate with OpenRouter" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Internal Server Error in chat route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
