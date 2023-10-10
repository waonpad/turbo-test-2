import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { getAllCookies } from '@/utils/cookie/get-all-cookies';
import { hostApi } from '@/utils/url/host-api';

export async function getWeapons() {
  return fetcher<Weapon[]>(hostApi('weapons'), {
    cache: 'no-cache',
    headers: {
      cookie: getAllCookies(),
    },
  });
}
