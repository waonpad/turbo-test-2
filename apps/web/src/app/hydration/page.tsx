// import Hydrate from "@/utils/hydrate.client";
// import { dehydrate } from "@tanstack/query-core";
// import ListUsers from "./UserList";
// import { User } from "../types";
// import { queryClient } from "@/lib/react-query";

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = (await res.json()) as User[];
//   return users;
// }

// export default async function Hydation() {
//   await queryClient.prefetchQuery(["hydrate-users"], getUsers);
//   const dehydratedState = dehydrate(queryClient);

//   return (
//     <Hydrate state={dehydratedState}>
//       <ListUsers />
//     </Hydrate>
//   );
// }

export default function Hydation() {
  return (
    <div>
      <h1>Hydation</h1>
    </div>
  );
}
