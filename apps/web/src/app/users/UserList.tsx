import Link from "next/link";
import { User } from "../types";

const UserList = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // const response = await fetch("https://jsonplaceholder.typicode.com/user");
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const response = await fetch("http://localhost:3000/api");
  const response = await fetch("http://localhost:3000/api?name=John", {
    // cacheしない設定
    // cacheされているかどうかは、ログのHIT/MISSで確認できる
    // cache: "no-store",
    // これで指定した秒数だけキャッシュされる
    // ビルドした際は、この指定した期間が経つと新しくhtmlが作成される
    // next: { revalidate: 5 },
  });
  if (!response.ok) throw new Error("Failed to fetch data");
  const users: User[] = await response.json();
  // console.log(users);
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
