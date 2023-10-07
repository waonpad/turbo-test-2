'use client';

import { signOut } from 'next-auth/react';

// ログアウトボタン
export const LogoutButton = () => {
  return <button onClick={() => signOut()}>Sign Out</button>;
};
