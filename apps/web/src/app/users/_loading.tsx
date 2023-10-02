// loading.tsxというファイル名で配置するとnext.jsが自動的にsuspenseの設定をしてくれる
// しかし、ページ全体がsuspendされてしまうので、明示的にsuspenseで囲むのが良い

export default function Loading() {
  return <div className="flex h-screen items-center justify-center font-bold">ローディング中</div>;
}
