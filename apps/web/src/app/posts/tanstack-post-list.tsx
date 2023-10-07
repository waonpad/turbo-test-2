// "use client";

// import { Post } from "@prisma/client";
// import { useQuery } from "@tanstack/react-query";
// import { getPosts } from "./_/api/getPosts";

// export default function TanstackPostList() {
//   const {
//     data: posts,
//     isLoading,
//     isFetching,
//     error,
//   } = useQuery({
//     queryKey: ["posts"],
//     queryFn: () => getPosts(),
//   });

//   return (
//     <ul>
//       {(posts?.data ?? []).map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

// // "use client";

// // import { fetcher } from "@/services/fetcher";
// // import { hostApi } from "@/utils/url";
// // import { Post } from "@prisma/client";
// // import { useQuery } from "@tanstack/react-query";
// // // import { getPosts } from "./page";

// // // fetcherはtanstackで使われることを想定していない
// // // どうしよう？

// // function getPosts(throwErr = false) {
// //   return fetcher<Post[]>(hostApi("posts"), {}, undefined, throwErr);
// // }

// // export default function PostList() {
// //   const {
// //     data: posts,
// //     isLoading,
// //     isFetching,
// //     error,
// //   } = useQuery({
// //     queryKey: ["posts"],
// //     queryFn: () => getPosts(),
// //   });

// //   return (
// //     <ul>
// //       {(posts?.data ?? []).map((post) => (
// //         <li key={post.id}>{post.title}</li>
// //       ))}
// //     </ul>
// //   );
// // }

export default function PostList() {
  return <div>PostList</div>;
}
