import { NextResponse } from 'next/server';

// 単純なレスポンス
// export function GET() {
//   return NextResponse.json({ name: "John Doe" });
// }

// 外部APIにアクセス
// export async function GET() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return NextResponse.json(data);
// }

// クエリパラメーターを取得
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  console.log(name);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return NextResponse.json(data);
}

// ヘッダーやクッキーを取得できる
// import { headers, cookies } from 'next/headers';

// export async function GET() {
//   const headersList = headers();
//   const cookieStore = cookies();

//   console.log('headersList', headersList);
//   console.log('cookieStore', cookieStore);

//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   return NextResponse.json(data);
// }

// POSTリクエストを受け取る
export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
