// ページディレクトリ内にlayout.tsxを配置すると、
// app配下のlayout.tsxにネストされてpage.tsxが返ってくる

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-center items-center h-screen">{children}</div>;
}
