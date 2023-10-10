'use client';
// useSessionを使う場合必要

import { useSession } from 'next-auth/react';
import { LoginButton } from '../_/components/login-button';
import { LogoutButton } from '../_/components/logout-button';

// クライアントコンポーネントでのログイン状態の取得
export default function ClientPage() {
  const {
    data: session,
    // status,
    // update,
  } = useSession({
    required: true, // SSRやCSRで有効
    onUnauthenticated: () => {
      // デフォルトではビルトインの`signIn`関数が呼ばれる
      // またサイン後にこのページに戻ってくるようcallbackUrlの設定も行われる
      // loggerやクライアントでの特別な処理をしたいときに有効
    },
  });

  const user = session?.user;

  return (
    <main className="flex h-3/4 items-center justify-center">
      <div>
        <div>{`${JSON.stringify(user)}`}</div>
        {user ? <div>Logged in</div> : <div>Not logged in</div>}
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </main>
  );
}

// サーバーコンポーネントでのログイン状態の取得
// export default async function Page() {
//   const session = await getServerSession(options);
//   const user = session?.user; // ログインしていなければnullになる。

//   return (
//     <main>
//       <div>
//         <div>{`${JSON.stringify(user)}`}</div>
//         {user ? <div>Logged in</div> : <div>Not logged in</div>}
//         {user ? <LogoutButton /> : <LoginButton />}
//       </div>
//     </main>
//   );
// }
