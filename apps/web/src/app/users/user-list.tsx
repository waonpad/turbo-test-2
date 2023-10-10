import Link from 'next/link';
import { clientEnv } from '@/constants';
import { PlaceHolderUser } from '@/types';

const UserList = async () => {
  const response = await fetch(`${clientEnv.NEXT_PUBLIC_HOST_URL}api?name=John`, {
    // cacheしない設定
    // cacheされているかどうかは、ログのHIT/MISSで確認できる
    // cache: "no-store",
    // これで指定した秒数だけキャッシュされる
    // ビルドした際は、この指定した期間が経つと新しくhtmlが作成される
    // next: { revalidate: 5 },
  });

  if (!response.ok) throw new Error('Failed to fetch data');
  const users: PlaceHolderUser[] = await response.json();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
