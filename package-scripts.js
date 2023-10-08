try {
  require('dotenv').config();
} catch (e) {
  console.log('dotenv is not installed');
}
const env = process.env;

const path = require('path');

const apiPath = path.resolve(__dirname, 'apps/api');
const webPath = path.resolve(__dirname, 'apps/web');

const ciApiPath = path.resolve(__dirname, 'out/apps/api');
const ciWebPath = path.resolve(__dirname, 'out/apps/web');

const databasePath = path.resolve(__dirname, 'packages/database');

// 事前にグローバルインストール
// planetscale cliを導入
// npm install -g nps dredd git-cz

module.exports = {
  scripts: {
    // 事前準備
    prepare: {
      default: `nps prepare.env preapre.dependencies prepare.packages prepare.apps`,
      env: {
        default: `node ${path.resolve(
          __dirname,
          'tool/copy-env.js' // .envファイルをコピーする自作スクリプト
        )} --dir ./apps/* ./packages/*`, // 対象ディレクトリ
      },
      dependencies: `yarn install && npx turbo prune`,
      docker: `docker compose up -d`,
      packages: `nps prepare.database`,
      database: `docker compose up -d && nps prisma.generate prisma.migrate.dev prisma.build`,
      apps: ``,
      ci: {
        web: `npx turbo prune --scope=web && cd out && yarn install --frozen-lockfile`,
        api: `npx turbo prune --scope=api && cd out && yarn install --frozen-lockfile`,
        database: `npx turbo prune --scope=database && cd out && yarn install --frozen-lockfile`,
      },
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
        database: 'cd out && npm run build',
      },
    },
    lint: {
      style: `yarn stylelint "**/*.{css,scss}"`,
    },
    // どこで使うんだこれ？デプロイ？
    docker: {
      build: {
        // webはVerelにホスティングするので不要
        // default: 'nps docker.build.web docker.build.api',
        // web: `docker build -t web . -f ${webPath}/Dockerfile`,
        api: `docker build -t ${env.GC_DOCKER_IMAGE} . -f ${apiPath}/Dockerfile`,
      },
      rmnone: {
        default: 'docker rmi $(docker images -f "dangling=true")',
      },
    },
    // 開発サーバー起動
    dev: 'docker compose up -d && npx turbo run dev --parallel --no-daemon',
    // git関連
    g: {
      a: `node ${path.resolve(
        __dirname,
        'tool/easy-git-add.js' // git addを簡単にする自作スクリプト
      )}`,
    },
    // gcloud関連

    // せっていちう
    gc: {
      auth: `gcloud auth login`,
      project: {
        create: `gcloud projects create ${env.GC_PROJECT_ID}`,
        set: `gcloud config set project ${env.GC_PROJECT_ID}`,
      },
      billing: {
        link: `gcloud billing projects link ${env.GC_PROJECT_ID} --billing-account=${env.GC_BILLING_ACCOUNT_ID}`,
      },
      secret: {
        enable: `gcloud services enable secretmanager.googleapis.com`,
        role: {
          add: `gcloud projects add-iam-policy-binding ${env.GC_PROJECT_ID} --member=serviceAccount:${env.GC_SERVICE_ACCOUNT} --role=roles/secretmanager.secretAccessor`,
        },
        // apiのenvファイルから読み取って設定したいな・・・
        // 10/09/03:09 ここまでやったよ

        // ここからやる
      },
      docker: {
        auth: `gcloud auth configure-docker`,
        role: {
          add: `gcloud projects add-iam-policy-binding ${env.GC_PROJECT_ID} --member=user:${env.GC_GOOGLE_ACCOUNT} --role=roles/storage.admin`,
        },
        tag: `docker tag ${env.GC_DOCKER_IMAGE} gcr.io/${env.GC_PROJECT_ID}/${env.GC_DOCKER_IMAGE}`,
        push: `docker push gcr.io/${env.GC_PROJECT_ID}/${env.GC_DOCKER_IMAGE}`,
      },
      cloudrun: {
        // いろんな設定入れられてないよ
        deploy: `gcloud run deploy ${env.GC_CLOUD_RUN_SERVICE} --image=gcr.io/${env.GC_PROJECT_ID}/${env.GC_DOCKER_IMAGE} --region=asia-northeast1 --platform=managed --allow-unauthenticated`,
      },
    },
    pscale: {
      // ブランチ機能は使わず一旦やる
      // planetscaleにデプロイする時はnpx prisma db push (migrateではない)
    },
  },
};
