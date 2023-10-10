import { type PlaceHolderUser } from '@/types';
import type { Metadata } from 'next';

async function getUser(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.json();
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const user: PlaceHolderUser = await getUser(params.id);
  return { title: user.name };
}

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: PlaceHolderUser[] = await response.json();

  // 静的なhtmlを作成するために、idの配列を返す
  // sliceして範囲を指定すると、その範囲だけのhtmlが作成される
  return users.map((user) => ({
    id: user.id.toString(),
  }));
}

const Page = async ({ params }: { params: { id: string } }) => {
  const user: PlaceHolderUser = await getUser(params.id);

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ詳細</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Page;
