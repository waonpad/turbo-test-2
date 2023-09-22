import { ZodObject } from "zod";
import { Err, ErrResponse, HttpResponse } from "./types";
import { errors } from "@/errors";
import { ZodError } from "zod";

export function fetcher<T>(
  input: RequestInfo,
  init?: RequestInit,
  validationSchema?: ZodObject<any>
) {
  // APIエンドポイントにアクセスする前に事前にバリデーションをして、負荷を減らす設計
  // これは工数が増えるので後からやる
  // 取り敢えずAPIから投げられたバリデーションエラーを裁くところから
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
      // ネットワークエラーと、transformResponseでのエラーを一まとめにして投げる
      console.log("fetcher: err", err);
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
            ...errors["VALIDATION"],
            errors: json.err.issues.map((issue) => ({
              code: issue.code,
              name: `${issue.path[0]}`,
              message: issue.message,
            })),
          },
          status: res.status,
        };

        console.log("=================================-");
        console.log("バリデーションエラーを受け取った！", response);
        console.log("=================================-");

        return response;
      }

      console.error("transformResponse Error:", res);

      throw res.statusText;
    }
    const json = await res.json();
    console.log("transformResponse Success:", res, json);

    return {
      data: json,
      err: null,
      status: res.status,
    };
  };
}

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

// export function fetcher<T>(
//   input: RequestInfo,
//   init?: RequestInit,
//   validationSchema?: ZodObject<any>,
//   throwErr = false
// ) {
//   try {
//     if (validationSchema) {
//       const data = JSON.parse(init?.body?.toString() || "");
//       validationSchema.parse(data);
//     }
//   } catch (err) {
//     return transformValidationErrors(err, throwErr);
//   }
//   return fetch(input, init)
//     .then(transformResponse<T>(throwErr))
//     .catch((err) => transformError<T>(err));
// }
