import { Post } from "@prisma/client";
import AddPost from "./AddPost";
// import TanstackPostList from "./TanstackPostList";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/utils/hydrate.client";
import { queryClient } from "@/lib/react-query";
import { fetcher } from "@/services/fetcher";
import { hostApi } from "@/utils/url";
import { getPosts } from "./_/api/getPosts";
import PostList from "./PostList";

// tanstack-queryを使ったらこれが無くてもビルドが通るようになった
export const dynamic = "force-dynamic";

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
