import { NextResponse } from "next/server";

import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "@/config/next-auth";

export async function GET() {
  const session = await getServerSession(nextAuthOptions); // セッション情報を取得

  console.log(session?.user); // ユーザ情報を取得

  return NextResponse.json({ message: "ok" });
}
