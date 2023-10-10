const { genSecret } = require('./gen-secret');
const fs = require('fs');
const path = require('path');

// .env ファイルを探す
const apiEnvPath = path.resolve(process.cwd(), 'apps', 'api', '.env');
const webEnvPath = path.resolve(process.cwd(), 'apps', 'web', '.env');

/**
 * .env ファイルの指定されたキーを更新する
 * @param {string} envPath .env ファイルのパス
 * @param {string} key 更新するキー
 * @param {string} value 更新する値
 */
const updateEnv = async (envPath, key, value) => {
  const envContent = await fs.promises.readFile(envPath, 'utf8');
  const newEnvContent = envContent
    .split('\n')
    .map((line) => {
      const [lineKey, lineValue] = line.split('=');
      if (lineKey === key) {
        return `${lineKey}=${value}`;
      }
      return line;
    })
    .join('\n');
  await fs.promises.writeFile(envPath, newEnvContent);
};

const main = async () => {
  // シークレットキーを生成
  const secret = await genSecret(16);

  // .env ファイルが存在する場合は、NEXTAUTH_SECRET を更新する
  if (fs.existsSync(apiEnvPath)) {
    await updateEnv(apiEnvPath, 'NEXTAUTH_SECRET', secret);
  }

  if (fs.existsSync(webEnvPath)) {
    await updateEnv(webEnvPath, 'NEXTAUTH_SECRET', secret);
  }
};

main();
