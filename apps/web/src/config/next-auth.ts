import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/lib/prisma';
import type { NextAuthOptions } from 'next-auth';
// import type { User } from "@/app/types";

export const nextAuthOptions: NextAuthOptions = {
  debug: true,
  // jwtにするの、必須
  session: { strategy: 'jwt' }, // adapterを使用する場合はstrategyがdatabaseになるが、明示的に指定すると強制できる
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    jwt: async ({ token, user, account, profile, trigger }) => {
      // 注意: トークンをログ出力してはダメです。
      console.log('in jwt', { user, token, account, profile });

      if (user) {
        token.user = user;
        // const u = user as User;
        // token.role = u.role;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    // session: ({ session, token }) => {
    //   console.log("in session", { session, token });
    //   token.accessToken;
    //   return {
    //     ...session,
    //     user: {
    //       ...session.user,
    //       role: token.role,
    //     },
    //   };
    // },

    // session: async ({ session, user }) => {
    session: async ({ session, token }) => {
      // これではダメだった
      // if (session.user) {
      //   session.user.id = user.id; // `User`テーブルのフィールド値を取得できる
      // }
      // return session;

      // こう
      // Send properties to the client, like an access_token and user id from a provider.
      token.accessToken = token.accessToken;
      session!.user!.id = token.id;

      return session;
    },
  },
};

// 非推奨なCredentialsProvider
// CredentialsProvider({
//   name: "Sign in",
//   credentials: {
//     email: {
//       label: "Email",
//       type: "email",
//       placeholder: "example@example.com",
//     },
//     password: { label: "Password", type: "password" },
//   },
//   // メルアド認証処理
//   async authorize(credentials) {
//     const users = [
//       { id: "1", email: "user1@example.com", password: "password1" },
//       { id: "2", email: "user2@example.com", password: "password2" },
//       { id: "3", email: "abc@abc", password: "123" },
//     ];

//     const user = users.find((user) => user.email === credentials?.email);

//     if (user && user?.password === credentials?.password) {
//       return {
//         id: user.id,
//         name: user.email,
//         email: user.email,
//         role: "admin",
//       };
//     } else {
//       return null;
//     }
//   },
// }),
