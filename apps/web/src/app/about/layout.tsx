// ページディレクトリ内にlayout.tsxを配置すると、
// app配下のlayout.tsxにネストされてpage.tsxが返ってくる

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-screen items-center justify-center">{children}</div>;
}
