import { HOST_URL, NEST_API_URL } from '@/constants';

export const host = (path: string) => {
  return `${HOST_URL}${path}`;
};

export const frontApi = (path: string) => {
  return `${HOST_URL}api/${path}`;
};

export const backApi = {
  nest: (path: string) => {
    return `${NEST_API_URL}${path}`;
  },
};
