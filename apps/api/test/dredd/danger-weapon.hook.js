// eslint-disable-next-line @typescript-eslint/no-var-requires
const hooks = require('hooks');
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const axios = require('axios');

hooks.before('/weapons/danger > GET > 200', async (transaction, done) => {
  // トークンをヘッダーに付与する
  transaction.request.headers.Authorization =
    'Bearer ' + `ここにidトークンを入れる`;

  done();
});
