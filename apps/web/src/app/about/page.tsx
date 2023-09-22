/* リンク */
/* マウスカーソルを載せるだけで勝手に遷移先のjsが読み込まれる */
/* これを回避したいならprefetch={false}を指定する */

import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/users" className="underline">
        User
      </Link>
      <h1 className="text-2xl">About</h1>
    </div>
  );
};

export default Page;
