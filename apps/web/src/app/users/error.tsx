'use client';

// error.tsxというファイル名で配置するとnext.jsが自動的にerrorboundaryの設定をしてくれる

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="m-4 font-bold">
      <p>{error.message}</p>
      <button className="rounded-lg bg-blue-500 px-2 py-1 text-white" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
