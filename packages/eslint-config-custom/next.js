module.exports = {
  extends: ["next", "turbo", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "turbo/no-undeclared-env-vars": "off", // process.env.なんとか を許可する
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};

// よくわからなかったものたち↓

// const { resolve } = require("node:path");

// const project = resolve(process.cwd(), "tsconfig.json");

// /*
//  * This is a custom ESLint configuration for use with
//  * Next.js apps.
//  *
//  * This config extends the Vercel Engineering Style Guide.
//  * For more information, see https://github.com/vercel/style-guide
//  *
//  */

// // module.exports = {
// //   extends: [
// //     "@vercel/style-guide/eslint/node",
// //     "@vercel/style-guide/eslint/browser",
// //     "@vercel/style-guide/eslint/typescript",
// //     "@vercel/style-guide/eslint/react",
// //     "@vercel/style-guide/eslint/next",
// //     "eslint-config-turbo",
// //     "eslint-config-next/core-web-vitals",
// //   ].map(require.resolve),
// //   parserOptions: {
// //     project,
// //   },
// //   globals: {
// //     React: true,
// //     JSX: true,
// //   },
// //   settings: {
// //     "import/resolver": {
// //       typescript: {
// //         project,
// //       },
// //     },
// //   },
// //   ignorePatterns: ["node_modules/", "dist/"],
// //   // add rules configurations here
// //   rules: {
// //     "import/no-default-export": "off",
// //   },
// // };

// module.exports = {
//   extends: "next/core-web-vitals",
//   // add rules configurations here
//   rules: {
//     "import/no-default-export": "off",
//   },
// };
