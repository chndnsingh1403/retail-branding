import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));
  // TODO: Validate and forward to Salesforce Web-to-Lead or REST API
  // For now, just echo back
  return NextResponse.json({ ok: true, received: data });
}
