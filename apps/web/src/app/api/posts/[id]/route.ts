import { NextResponse } from 'next/server';
import { z, ZodError } from 'zod';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  // { params }: { params: { id: number } } // paramsはstring型になっている
  { params }: { params: { id: string } }
) {
  console.log('GET', params);

  const validationSchema = z.object({
    // id: z.number(),
    // idをstringからnumberに変換
    id: z.string().transform((val) => parseInt(val)),
  });

  try {
    if (validationSchema) {
      // const data = JSON.parse(params?.toString() || ""); // いらない
      validationSchema.parse(params);
    }
  } catch (err) {
    if (err instanceof ZodError) {
      console.log('バリデーションエラー', err);

      // return transformValidationErrors(err);

      return NextResponse.json(
        {
          err: err,
        },
        {
          status: 422,
        }
      );
    }
    // throw err;
    // ZodErrorじゃないエラーが起きた場合は、そのまま投げる？
  }

  const post = await prisma.post.findUnique({
    // params.idはstring型なので、number型に変換
    // numberであることは、バリデーションで確認済み
    where: { id: Number(params.id) },
  });

  return NextResponse.json(post);
}

// // 一時的にanyにしている
// export function transformValidationErrors(error: unknown): any {
//   if (error instanceof ZodError) {
//     console.log("ぞっどエラー", error);

//     const errors = error.errors.map((issue) => ({
//       code: issue.code,
//       name: `${issue.path[0]}`,
//       message: issue.message,
//     }));

//     return NextResponse.json(
//       {
//         err: errors,
//       },
//       {
//         status: 422,
//       }
//     );
//   }
//   throw error;
// }
