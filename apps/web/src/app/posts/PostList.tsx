import Link from "next/link";
import { getPosts } from "./_/api/getPosts";

export default async function PostList() {
  const { data: posts, err } = await getPosts();

  return (
    <ul>
      {(posts ?? []).map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
