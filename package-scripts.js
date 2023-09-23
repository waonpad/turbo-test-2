const path = require('path');

const apiPath = path.resolve(__dirname, 'apps/api');
const webPath = path.resolve(__dirname, 'apps/web');

const ciApiPath = path.resolve(__dirname, 'out/apps/api');
const ciWebPath = path.resolve(__dirname, 'out/apps/web');

const databasePath = path.resolve(__dirname, 'packages/database');

// 事前にグローバルインストール
// npm install -g nps dredd

module.exports = {
  scripts: {
    prepare: {
      default: `nps prepare.env preapre.dependencies prepare.packages prepare.apps`,
      env: {
        default: `node ${path.resolve(
          __dirname,
          'tool/copy-env.js' // .envファイルをコピーする自作スクリプト
        )} --dir ./apps/* ./packages/*`, // 対象ディレクトリ
      },
      dependencies: `yarn install && npx turbo prune`,
      packages: `nps prepare.database`,
      database: ` nps prisma.generate prisma.migrate.dev prisma.build`,
      apps: ``,
    },
    test: {
      default: `nps test.web test.api`,
      web: `cd ${webPath} && yarn test`,
      api: `cd ${apiPath} && yarn test`,
      dredd: `cd ${apiPath} && dredd`, // APIドキュメントのテスト
      ci: {
        default: `nps test.ci.web test.ci.api`,
        web: `cd ${ciWebPath} && yarn test:ci`,
        api: `cd ${ciApiPath} && yarn test:ci`,
      },
      watch: {
        default: `nps test.watch.web test.watch.api`,
        web: `cd ${webPath} && yarn test:watch`,
        api: `cd ${apiPath} && yarn test:watch`,
      },
    },
    prisma: {
      generate: `cd ${databasePath} && npx prisma generate`,
      studio: `cd ${databasePath} && npx prisma studio`,
      migrate: {
        dev: `cd ${databasePath} && npx prisma migrate dev`,
      },
      build: {
        default: `cd ${databasePath} && yarn build`,
      },
    },
    build: {
      default: 'npx turbo run build',
      ci: {
        web: 'cd out && npm run build',
        api: 'cd out && npm run build',
      },
    },
    lint: {
      style: `yarn stylelint "**/*.{css,scss}"`,
    },
    dev: 'npx turbo run dev',
  },
};
