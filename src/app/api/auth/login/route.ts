import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log(res);
  return NextResponse.json({
    status: 200,
    message: "success",
    data: res,
  });
}
