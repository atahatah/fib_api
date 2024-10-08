import { NextRequest, NextResponse } from "next/server";
import { fibonacci } from "@/features/fib/index";
import { NotIntegerError, OutOfRangeError, TooLargeError } from "@/libs/errors";

export function GET(request: NextRequest): NextResponse {
  const params = request.nextUrl.searchParams;
  const query = params.get("n");

  if (!query) {
    return NextResponse.json({ "error": "Query parameter 'n' is required" }, { status: 400 });
  }
  const n = Number(query);

  try {
    // BigIntはJSONに変換できないので、文字列に変換して返す
    const result = fibonacci(n).toString();
    return new NextResponse(`{"result": ${result}}`, { headers: { "Content-Type": "application/json" } });
  } catch (e) {
    if (e instanceof OutOfRangeError) {
      return NextResponse.json({ "error": e.message }, { status: 422 });
    } else if (e instanceof TooLargeError) {
      return NextResponse.json({ "error": e.message }, { status: 422 });
    } else if (e instanceof NotIntegerError) {
      return NextResponse.json({ "error": e.message }, { status: 422 });
    } else if (e instanceof Error) {
      return NextResponse.json({ "error": `Internal Server Error : ${e.message}` }, { status: 500 });
    }
    return NextResponse.json({ "error": "Internal Server Error" }, { status: 500 });
  }
}