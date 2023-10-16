import { getTattoos } from "@/firebase";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const tattooList = await getTattoos("blackbellart");

  return NextResponse.json(tattooList);
}
