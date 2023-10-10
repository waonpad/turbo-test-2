// export { default } from "next-auth/middleware"; // defaultを使う場合

// export const config = {
//   matcher: [] // 正規表現でパスを指定できる
// };

import { withAuth } from 'next-auth/middleware';

export default withAuth(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function middleware(req) {
    // callbacks.authorizedがtrueの場合のみこの関数内が実行される
    // console.log('in middleware: ', req.nextauth.token);
  },
  {
    callbacks: {
      // 認可に関する処理
      authorized: ({ token }) => {
        console.log('Logged by middleware.ts / in authorized: ', token);

        // if (token) return true; // デフォ
        // else return false;
        return true;
      },
    },
  }
);
