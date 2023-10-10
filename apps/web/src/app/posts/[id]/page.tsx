import { getPost } from '../_/api/getPost';

export default async function Page({ params }: { params: { id: string } }) {
  const { data: post } = await getPost(Number(params.id));

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
