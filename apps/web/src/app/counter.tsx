'use client';

// reactのフックを使ったりして、クライアント側で状態が変わるコンポーネントを使う時は
// use clientを先頭につける必要がある
// 親コンポーネントにつけても動く

import { useCounter } from '@/context/counter-provider';

const Counter = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useCounter();
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment} className="rounded-lg bg-blue-600 px-2 py-1 text-white">
        Increment
      </button>
      {children}
    </>
  );
};

export default Counter;
