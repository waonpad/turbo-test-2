// import { ZodObject } from "zod";
import { ZodError } from 'zod';
import { errors } from '@/errors';
import { HttpResponse } from './types';

export function fetcher<T>(
  input: RequestInfo,
  init?: RequestInit
  // validationSchema?: ZodObject<any> // API Routesの方でバリデーションしている。APIに直接アクセスされる場合も考えて、そちらでやるのが良さそう？
) {
  // APIエンドポイントにアクセスする前にクライアント側で事前にバリデーションをするならここ
  // try {
  //   if (validationSchema) {
  //     const data = JSON.parse(init?.body?.toString() || "");
  //     validationSchema.parse(data);
  //   }
  // } catch (err) {
  //   return transformValidationErrors(err);
  // }
  return fetch(input, init)
    .then(transformResponse<T>())
    .catch((err) => {
      console.log('fetcher: err', err);
      throw err;
    });
}

export function transformResponse<T>() {
  return async (res: Response): Promise<HttpResponse<T>> => {
    if (!res.ok) {
      // バリデーションエラーを422で受け取り、エラーとして投げずreturnする

      if (res.status === 422) {
        const json: {
          err: ZodError;
        } = await res.json(); // ZodErrorで一時的に型を固定

        const response: HttpResponse<T> = {
          data: null,
          err: {
            ...errors['VALIDATION'],
            errors: json.err.issues.map((issue) => ({
              code: issue.code,
              name: `${issue.path[0]}`,
              message: issue.message,
            })),
          },
          status: res.status,
        };

        console.log('=================================-');
        console.log('バリデーションエラーを受け取った！', response);
        console.log('=================================-');

        return response;
      }

      console.error('transformResponse Error:', res);

      throw res.statusText;
    }
    const json = await res.json();
    // console.log('transformResponse Success:', res, json);

    return {
      data: json,
      err: null,
      status: res.status,
    };
  };
}

// 触ってない
// export function transformValidationErrors(
//   error: unknown
// ): Promise<ErrResponse> {
//   if (error instanceof ZodError) {
//     const err: Err = {
//       ...errors["VALIDATION"],
//       errors: error.errors.map((issue) => ({
//         code: issue.code,
//         name: `${issue.path[0]}`,
//         message: issue.message,
//       })),
//     };
//     const response: ErrResponse = {
//       data: null,
//       err,
//       status: errors["VALIDATION"].status,
//     };
//     return Promise.resolve(response);
//   }
//   throw error;
// }
