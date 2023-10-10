import AddPost from './add-post';
import PostList from './post-list';

export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">記事一覧</h1>
      <PostList />
      <AddPost />
    </div>
  );
}
