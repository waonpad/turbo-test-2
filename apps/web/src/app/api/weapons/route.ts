import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { resolveResponseInit } from '@/utils/response';
import { backApi } from '@/utils/url/back-api';

export async function GET(req: NextRequest) {
  const token = await getToken({ req, raw: true });

  // レスポンスを元にいろいろする可能性がある？からfetcherでラップしない方がいいかも
  const res = await fetch(backApi.nest('weapons'), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const resJson = await res.json();

  // 中継点が型を知らないのめんどくさそう
  // 他プロパティも返したい場合は？？？
  return NextResponse.json(resJson, resolveResponseInit(res));
}

export async function POST(req: NextRequest) {
  const reqJson = await req.json();

  const token = await getToken({ req, raw: true });

  const res = await fetch(backApi.nest('weapons'), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqJson),
  });

  const resJson = await res.json();

  return NextResponse.json(resJson, resolveResponseInit(res));
}
