import AddPost from './add-post';
// import TanstackPostList from "./TanstackPostList";
import PostList from './post-list';

// tanstack-queryを使ったらこれが無くてもビルドが通るようになった
export const dynamic = 'force-dynamic';

export default async function Page() {
  // これはpage.tsxではなくもう一つ下の階層に移して、Suspenseを使えるようにする
  // Hydrateする事前準備も簡単にできるようにしたい
  // await queryClient.prefetchQuery(["posts"], getPosts);
  // const dehydratedState = dehydrate(queryClient);

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">記事一覧</h1>
      {/* <Hydrate state={dehydratedState}>
        <TanstackPostList />
      </Hydrate> */}
      <PostList />
      <AddPost />
    </div>
  );
}
