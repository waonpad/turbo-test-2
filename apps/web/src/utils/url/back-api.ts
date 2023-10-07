import { serverEnv } from '../../constants';

export const backApi = {
  nest: (path: string) => {
    return `${serverEnv.NEST_API_URL}${path}`;
  },
};
