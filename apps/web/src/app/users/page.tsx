import UserList from "./UserList";

// ビルド通すため必要
export const dynamic = "force-dynamic";

// メタデータをここでも設定できる
export const metadata = {
  title: "ユーザの一覧ページ",
  description: "JSONPlaceHolderから取得したユーザ一覧です。",
};

const Page = async () => {
  // const response = await fetch("http://localhost:8080/api", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: "John",
  //     email: "john@example.com",
  //   }),
  // });

  // const data = await response.json();

  // console.log(data);

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <UserList />
    </div>
  );
};

export default Page;

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// const getUsers = async (): Promise<User[]> => {
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   return response.json();
// };

// import { Suspense } from "react";
// import UserList from "./UserList";
// import OtherUserList from "./OtherUserList";

// const Page = async () => {
//   return (
//     <div className="m-4">
//       <h1 className="text-lg font-bold">ユーザ一覧</h1>
//       <Suspense fallback={<p className="text-red-700">Loading UserList...</p>}>
//         <UserList />
//       </Suspense>
//       <Suspense fallback={<p>Loading OtherUserList...</p>}>
//         <OtherUserList />
//       </Suspense>
//     </div>
//   );
// };

// export default Page;
