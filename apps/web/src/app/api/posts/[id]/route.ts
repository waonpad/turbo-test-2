import { NextResponse } from 'next/server';
import { z, ZodError } from 'zod';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } } // paramsはstring型で入ってくる
) {
  console.log('GET', params);

  const validationSchema = z.object({
    // idをstringからnumberに変換
    id: z.string().transform((val) => parseInt(val)),
  });

  try {
    if (validationSchema) {
      validationSchema.parse(params);
    }
  } catch (err) {
    if (err instanceof ZodError) {
      console.log('バリデーションエラー', err);

      return NextResponse.json(
        {
          err: err,
        },
        {
          status: 422,
        }
      );
    }
    throw err; // zodError以外のエラーはそのまま投げる
  }

  const post = await prisma.post.findUnique({
    // params.idはstring型なので、number型に変換
    // numberであることは、バリデーションで確認済み
    where: { id: Number(params.id) },
  });

  return NextResponse.json(post);
}
