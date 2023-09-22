[]で囲むとダイナミックルーティングができる

ブラウザから/blog/1/2/3 にアクセスすると 404 ページが表示されるため params の値を確認することはできません。

1,2,3 の値を取得するためにはディレクトリ名を[id]から[...id]に変更します。設定後、再度ブラウザからアクセスすると配列の形で 1,2,3 の値を取得することができます。

Terminal
{
id: ['1', '2', '3'];
}
params の型も下記のように配列で設定します。

page.tsx
const Page = ({ params }: { params: { id: string[] } }) => {
console.log(params);
return <div className="m-4 font-bold">Blog ID: </div>;
};

export default Page;
こちらは通常の設定方法ですが、/blog/1/2/3 でページを表示させるためには[id]ディレクトリの下に[userId]、さらにその下に[categoryId]を作成して[categoryId]の下に page.tsx ファイルを作成します。useId と catagoryId は任意の名前をつけることができますが id, userId, categoryId と異なる名前をつけてください。同じ名前をつけた場合には”Error: You cannot have the same slug name "id" repeat within a single dynamic path”のメッセージが表示されます。
