import { clientEnv } from '@/constants/clientEnv.mjs';

export const host = (path: string) => {
  return `${clientEnv.NEXT_PUBLIC_HOST_URL}${path}`;
};
