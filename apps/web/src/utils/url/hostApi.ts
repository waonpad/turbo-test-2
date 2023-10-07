import { clientEnv } from '@/constants/clientEnv.mjs';

export const hostApi = (path: string) => {
  return `${clientEnv.NEXT_PUBLIC_HOST_URL}api/${path}`;
};
