'use client';

import { signIn } from 'next-auth/react';

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
