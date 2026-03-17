import { NextResponse } from "next/server";
import vm from "vm";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code, problem_id, problem_description, testcases } = body;

    // Call the Python backend dynamically
    const API_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";
    
    const response = await fetch(`${API_URL}/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        problem_id: problem_id?.toString() || "1",
        problem_description: problem_description || "Solve the coding challenge.",
        testcases: testcases || []
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: `Python Backend Error: ${errorText}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
