import { getTattoos } from "@/firebase";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const count = req.nextUrl.searchParams.get("count");
  const tattooList = await getTattoos("blackbellart", count);

  return NextResponse.json(tattooList);
}
