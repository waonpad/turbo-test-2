const changelogConfig = require('./changelog.config');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', changelogConfig.list],
  },
};

// # 概要
// # https://zenn.dev/kalubi/articles/27fa889c338cdf

// # 文法
// # <型>[スコープ(任意)]: <タイトル>

// # [本文(任意)]

// # [任意(任意)]

// # 型
// # build: ビルドシステムまたは外部依存関係に影響する変更 （スコープの例: gulp、broccoli、npm）
// # ci: CI構成ファイルとスクリプトへの変更（スコープの例: Travis、Circle,、BrowserStack、SauceLabs）
// # docs: ドキュメントのみの変更
// # feat: 新機能
// # fix: バグ修正
// # perf: パフォーマンスの向上
// # refactor: リファクタリング（バグ修正も機能追加も行わないコード変更）
// # style: コードの意味に影響しない変更（空白、書式設定、セミコロンなど）
// # test: 不足しているテストの追加または既存のテストの修正
