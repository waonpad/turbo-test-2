import ThemeProvider from '@/providers/ThemeProvider';
import { NextAuthProvider } from './NextAuthProvider';

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      {/* <QueryProvider> */}
      <NextAuthProvider>{children}</NextAuthProvider>
      {/* </QueryProvider> */}
    </ThemeProvider>
  );
}
