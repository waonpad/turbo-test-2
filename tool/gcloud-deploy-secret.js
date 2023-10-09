// このスクリプトを実行しても、使わなくなったシークレットや、更新前のバージョンは残り続けます

const { execSync } = require('child_process');
const path = require('path');

require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });
const env = process.env;

const gcSecrets = Object.entries(env).filter(([key, value]) => key.startsWith('GC_SECRET_'));

const updateSecret = (secretName, secretValue, currentSecretValue) => {
  if (currentSecretValue !== secretValue) {
    const updateCommand = `echo ${secretValue}| gcloud secrets versions add ${secretName} --data-file=-`;

    console.log(updateCommand);

    execSync(updateCommand);

    console.log(`シークレット ${secretName} を更新しました。`);
  } else {
    console.log(`シークレット ${secretName} は更新の必要がありません。`);
  }
};

const updateSecretWithoutCheck = (secretName, secretValue) => {
  const updateCommand = `echo ${secretValue}|gcloud secrets versions add ${secretName} --data-file=-`;

  console.log(updateCommand);

  execSync(updateCommand);

  console.log(`シークレット ${secretName} を更新しました。`);
};

const createSecret = (secretName, secretValue) => {
  const createCommand = `echo ${secretValue}| gcloud secrets create ${secretName} --data-file=-`;

  console.log(createCommand);

  execSync(createCommand);

  console.log(`シークレット ${secretName} を作成しました。`);
};

const main = async () => {
  for (const [key, value] of gcSecrets) {
    const secretValue = value;

    const secretName = key.replace('GC_SECRET_', '');
    const command = `gcloud secrets versions access latest --secret=${secretName}`;
    console.log(command);
    try {
      const result = execSync(command, { encoding: 'utf8' });
      const currentSecretValue = result.trim();

      console.log(`シークレット ${secretName} の現在の値は ${currentSecretValue} です。`);

      updateSecret(secretName, secretValue, currentSecretValue);
    } catch (e) {
      // ERROR: (gcloud.secrets.create) Resource in projects [waonpad-ct] is the subject of a conflict: Secret [projects/520660246236/secrets/APP_ENV] already exists.
      // 以外のパターンに対応

      // ERROR: (gcloud.secrets.versions.access) FAILED_PRECONDITION: Secret Version [projects/520660246236/secrets/APP_ENV/versions/2] is in DESTROYED state.
      // などのパターンに対応
      if (!e.stderr.includes('DESTROYED state') || !e.stderr.includes('DISABLED state')) {
        updateSecretWithoutCheck(secretName, secretValue);
      } else {
        createSecret(secretName, secretValue);
      }
    }
  }
};

main();
