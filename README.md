# Turborepo FullStack Starter

## 概要

- ✅ [Turborepo](https://turbo.build/repo/docs)
- ✅ [NestJS](https://docs.nestjs.com)
  - ✅ Prisma
  - ✅ APIドキュメント生成, [Dredd](https://dredd.org/en/latest/)によるテスト
- ✅ [Next.js](https://nextjs.org/docs)
  - ✅ Prisma
  - ✅ Tailwind
- ✅ [Auth.js](https://authjs.dev/getting-started/oauth-tutorial)を使ったOAuth認証
- ✅ [Storybook](https://storybook.js.org/docs/react/get-started/whats-a-story)
- ✅ jestによるテスト
- ✅ 環境変数バリデーション
- ✅ Git
  - ✅ GitHub Actions (自動テスト)
  - ✅ Issue, PR, Commitメッセージのテンプレート
  - ✅ Git Hooks (自動整形, 自動テスト, 自動インストール)
- ✅ DatabaseをDockerコンテナで利用し、ローカルを汚さない
- ✅ [Node Package Scripts](https://github.com/sezna/nps#readme) によるコマンド簡潔化

## 中身

### Apps and Packages

- `apps`
  - `api`: [NestJS](https://docs.nestjs.com) のバックエンド
  - `web`: [Next.js](https://nextjs.org/docs) のフロントエンド
  - `workshop`: [Storybook](https://storybook.js.org/docs/react/get-started/whats-a-story) のUIカタログ
- `packages`
  - `database`: `api`, `web` で使われる, PrismaClientのラッパー
  - `eslint-config-custom`: `.eslintrc.js` で使われる, eslintの設定
  - `stylelint-config`: `.stylelintrc.js` で使われる, stylelintの設定
  - `tailwind-config`: `globals.css`, `postcss.config.js`, `tailwind.config.js` で使われる, tailwindまわりの設定
  - `tsconfig`: `tsconfig.json` で使われる, TypeScriptの設定
  - `ui`: `web`, `workshop` で使われる汎用コンポーネントと, コンポーネント生成

### Utilities

- `.vscode`: チーム開発で環境を素早く合わせるためのあれこれ
- `tool`: こまごましたスクリプト置き場

## セットアップ

### 前提条件

yarn, nps, Dredd, [git-cz](https://www.npmjs.com/package//git-cz) をインストール

```
npm i -g yarn nps dredd git-cz
```

💡 Docker, Docker Compose のインストールを確認

### 準備する

以下のコマンドで,

- (`.env.*example`)を全てコピーし, 設定可能にする
- 認証に使うsecretを生成し、`api`, `web`の環境変数に設定
- パッケージのインストール
- DBコンテナの起動と初回マイグレーション

が実行される

```
nps prepare
```

#### OAuth認証の準備

Google CloudでOAuth認証用のセットアップをします

1. [ココ](https://console.cloud.google.com/apis/credentials)にアクセス
2. `+ CREATE CREDENTIALS` をクリック
3. `OAuth client ID` を選択
4. `Application type` に `Web application` を選択
5. `Authorized JavaScript origins` に `http://localhost:8080` を追加
6. `Authorized redirect URIs` に `http://localhost:8080/api/auth/callback/google` を追加
7. `CREATE` をクリックし, 作成が完了するとClient IDとClient secretが表示される
8. それぞれ `<rootDir>/apps/web/.env` の対応する行に設定

### 開発を始める

以下のコマンドで,

- DBコンテナの起動
- 全てのワークスペースの開発サーバーの起動

が実行される

```
nps dev
```

デフォルト設定で開かれるポートと対応するアプリは以下

- http://localhost:3000: `api` (NestJS)
- http://localhost:8080: `web` (Next.js)
- http://localhost:6006: `workshop` (Storybook)
- http://localhost:3306: MySql

更に, Prisma Studio を起動すれば、DBに簡単にアクセスできる

```
nps prisma.studio
```

- http://localhost:5555: Prisma Studio
