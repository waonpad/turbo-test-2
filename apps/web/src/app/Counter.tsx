'use client';

// reactのフックを使ったりして、クライアント側で状態が変わるコンポーネントを使う時は
// use clientを先頭につける必要がある
// 親コンポーネントにつけても動く

// import { useState } from "react";

// const Counter = ({ children }: { children: React.ReactNode }) => {
//   const [count, setCount] = useState<number>(0);
//   const increment = () => {
//     setCount((prev) => prev + 1);
//   };
//   return (
//     <>
//       <div>Count: {count}</div>
//       <button
//         onClick={increment}
//         className="px-2 py-1 rounded-lg bg-blue-600 text-white"
//       >
//         Increment
//       </button>
//       {children}x
//     </>
//   );
// };

// export default Counter;

import { useCounter } from './context/CounterProvider';

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
