## フロントエンド : [Vercel](https://vercel.com)

簡単なGUI操作でデプロイできる  
以下のリンクを参照

[Vercelにデプロイしてみよう | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/tutorials/vercel-deploy)

### 環境変数を設定する

以下のパスで設定可能

`https://vercel.com/<チーム名>/<プロジェクト名>/settings/environment-variables`

当然, ローカルの環境変数のままでは動かない  
以下のように設定する

DATABASE_URL: <DBのホスティング先URL>  
NEST_API_URL: <バックエンドのホスティング先URL>/  
NEXT_PUBLIC_HOST_URL: https://<プロジェクト名>.vercel.app/  
NEXTAUTH_URL: https://<プロジェクト名>.vercel.app
NEXTAUTH_SECRT: <バックエンドのホスティング先と同じ値>

### OAuth認証が通るようにする

お試しで利用するならローカルで利用していたClient IDをそのまま使えば良い  
以下をそれぞれ追加する

- `Authorized JavaScript origins` に https://<プロジェクト名>.vercel.app
- `Authorized redirect URIs` に https://<プロジェクト名>.vercel.app/api/auth/callback/google

### 自動デプロイを止める, 条件をつける

以下のパス, **Ignored Build Step** の項で設定可能

`https://vercel.com/<チーム名>/<プロジェクト名>/settings/git`
