'use client';

import { signIn } from 'next-auth/react';

// ログインボタン
export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn()}
      // onClick={() => signIn(undefined, { callbackUrl: "/" })} // ログイン後のリダイレクト先を指定できる
    >
      Sign in
    </button>
  );
};