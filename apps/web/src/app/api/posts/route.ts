import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);

  // エラーメッセージをユーザーに直接見せるのは良くないので、ステータスコードに
  // 応じて、一般的なメッセージにNextが勝手に変換してくれる
  // オリジナルにしたい場合、fetcherで定義すればいいか

  // return new Response("あいうえお", { status: 500 });

  // https://stackoverflow.com/questions/75835856/how-to-return-api-response-status-in-nextjs13
  // jsonメソッドの第二引数にレスポンス情報を付与できる！

  // return NextResponse.json({ message: "あいうえお" }, { status: 500 });
}

export async function POST(request: Request) {
  const req = await request.json();
  await prisma.post.create({ data: req });

  return NextResponse.json(req);
}
