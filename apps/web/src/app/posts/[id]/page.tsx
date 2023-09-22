import { Post } from "@prisma/client";
import { getPost } from "../_/api/getPost";

// テスト用コンポーネント

// export default async function Page() {
// const { data: post, err } = await getPost(1);
export default async function Page({ params }: { params: { id: string } }) {
  const { data: post, err } = await getPost(Number(params.id));

  if (err) {
    return <div>Error: {JSON.stringify(err)}</div>;
  }

  // これでいいのか？？？
  if (!post) {
    return <div>Not Found</div>;
  }

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">記事詳細</h1>
      <p>ID: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
    </div>
  );
}
