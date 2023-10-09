const { execSync } = require('child_process');

const targetFiles = ['package.json', 'yarn.lock', 'package-lock.json'];

const installCommand = 'yarn install --frozen-lockfile';

const main = () => {
  try {
    const stdout = execSync("git diff 'HEAD@{1}' --name-only").toString('utf-8');
    const changedFiles = stdout
      .trim()
      .split('\n')
      .filter((name) => targetFiles.includes(name));

    if (changedFiles.length > 0) {
      execSync(installCommand, { stdio: 'inherit' });
    }
  } catch (e) {
    console.warn(e);
    console.log('you need install.');
  }
};

main();
