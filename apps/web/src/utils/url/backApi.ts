import { serverEnv } from '../../constants/serverEnv.mjs';

export const backApi = {
  nest: (path: string) => {
    return `${serverEnv.NEST_API_URL}${path}`;
  },
};
