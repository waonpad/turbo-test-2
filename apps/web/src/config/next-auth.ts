import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/lib/prisma';
import type { NextAuthOptions } from 'next-auth';

export const nextAuthOptions: NextAuthOptions = {
  debug: true,
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
      // CAUTION: 本番環境でトークンをログ出力しない
      // console.log('in jwt', { user, token, account, profile });

      if (user) {
        token.user = user;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session!.user!.token = token;

      return session;
    },
  },
};
