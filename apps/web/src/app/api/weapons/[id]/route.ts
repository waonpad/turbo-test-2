import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { resolveResponseInit } from '@/utils/response';
import { backApi } from '@/utils/url/backApi';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const token = await getToken({ req, raw: true });

  const res = await fetch(backApi.nest(`weapons/${params.id}`), {
    // 必要ないが、つけておく
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const resJson = await res.json();

  return NextResponse.json(resJson, resolveResponseInit(res));
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const reqJson = await req.json(); // このようにしてbodyを受け取れる

  const token = await getToken({ req, raw: true });

  const res = await fetch(backApi.nest(`weapons/${params.id}`), {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqJson), // JSON.stringifyしないとバックエンドで受け取れない
  });

  const resJson = await res.json();

  return NextResponse.json(resJson, resolveResponseInit(res));
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const token = await getToken({ req, raw: true });

  const res = await fetch(backApi.nest(`weapons/${params.id}`), {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const resJson = await res.json();

  return NextResponse.json(resJson, resolveResponseInit(res));
}
