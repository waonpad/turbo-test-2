const crypto = require('crypto');

const genSecret = async (length) => {
  const bytes = await crypto.randomBytes(length);
  return bytes.toString('hex');
};

const main = async () => {
  const length = process.argv[2] || 32;

  const secret = await genSecret(Number(length));
  console.log(secret);
};

main();
