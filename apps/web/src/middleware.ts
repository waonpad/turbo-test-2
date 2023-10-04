// export { default } from "next-auth/middleware"; // defaultをママ使う。

// export const config = {
//   matcher: ["/((?!register|api|login).*)"], // ?!で否定です。
// };

import { withAuth } from 'next-auth/middleware';

export default withAuth(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function middleware(req) {
    // callbacks.authorizedがtrueの場合のみ進入できる
    // console.log('in middleware: ', req.nextauth.token);
  },
  {
    callbacks: {
      // 認可に関する処理。ロールが `admin` ならOK
      authorized: ({ token }) => {
        console.log('Logged by middleware.ts / in authorized: ', token);
        
        // return token?.role === "admin";
        // if (token) return true; // デフォ
        // else return false;
        return true;
      },
    },
  }
);
