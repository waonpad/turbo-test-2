import Link from 'next/link';
import { Button } from 'ui';
import { clientEnv } from '@/constants';
import Counter from './counter';

export const metadata = {
  metadataBase: new URL(clientEnv.NEXT_PUBLIC_HOST_URL),
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="m-4 flex flex-col">
      <div className="min-w-0">
        <Button />
      </div>
      <Link href="/about" className="underline">
        About
      </Link>
      <Link href="/users" className="underline">
        Users
      </Link>
      <Link href="/weapons" className="underline">
        Weapons
      </Link>
      <Link href="/posts" className="underline">
        Posts
      </Link>
      <Link href="/file" className="underline">
        File
      </Link>
      <Link href="/auth/login" className="underline">
        Login
      </Link>
      <h1 className="text-2xl">Home</h1>
      <div className="min-w-0">
        <Counter>
          {/* <h2 className="mt-4 text-lg font-bold">ユーザ一覧</h2> */}
          {/* fetchができずCIビルドが通らなかったので一旦コメントアウ ← なぜ？ */}
          {/* <UserList /> */}
        </Counter>
      </div>
    </div>
  );
}
