import UserList from './user-list';

// ビルド通すため必要
export const dynamic = 'force-dynamic';

// メタデータをここでも設定できる
export const metadata = {
  title: 'ユーザの一覧ページ',
  description: 'JSONPlaceHolderから取得したユーザ一覧です。',
};

const Page = async () => {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <UserList />
    </div>
  );
};

export default Page;
