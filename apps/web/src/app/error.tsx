"use client";

// error.tsxというファイル名で配置するとnext.jsが自動的にerrorboundaryの設定をしてくれる

// 最上位に配置したら全てのページがこれを使うようになった？

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="m-4 font-bold">
      <p>{error.message}</p>
      <p>{JSON.stringify(error, null, 2)}</p>
      <button
        className="px-2 py-1 text-white bg-blue-500 rounded-lg"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
