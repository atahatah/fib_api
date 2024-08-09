import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
  const params = request.nextUrl.searchParams;
  const query = params.get("n");

  if (!query) {
    return NextResponse.json({ "error": "Query parameter 'n' is required" }, { status: 400 });
  }
  const n = parseInt(query);

  // BigIntはJSONに変換できないので、文字列に変換して返す
  const result = fibonacci(n).toString();
  return new NextResponse(`{"result": ${result}}`, { headers: { "Content-Type": "application/json" } });
}