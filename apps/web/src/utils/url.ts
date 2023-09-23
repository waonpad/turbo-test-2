import { HOST_URL } from '@/constants';

export const host = (path: string) => {
  return `${HOST_URL}${path}`;
};

export const hostApi = (path: string) => {
  return `${HOST_URL}api/${path}`;
};
