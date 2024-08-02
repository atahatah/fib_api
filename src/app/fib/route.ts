import { NextRequest, NextResponse } from "next/server";

const fibonacci = (n: number): BigInt => {
  if (n <= 1) return BigInt(n);
  let a = 0n, b = 1n, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

export function GET(request: NextRequest): NextResponse {
    const params = request.nextUrl.searchParams;
    const query = params.get("n");
    
    if (!query) {
        return NextResponse.json({ "error": "Query parameter 'n' is required" }, { status: 400 });
    }
    const n = parseInt(query);
    const result = fibonacci(n).toString(); // Convert BigInt to string
    return NextResponse.json({"result" : result});
}