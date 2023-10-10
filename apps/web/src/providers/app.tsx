import { NextAuthProvider } from './next-auth-provider';

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <>
      <NextAuthProvider>{children}</NextAuthProvider>
    </>
  );
}
