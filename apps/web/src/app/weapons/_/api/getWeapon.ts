import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { getAllCookies } from '@/utils/cookie/getAllCookies';
import { frontApi } from '@/utils/url';

export function getWeapon(id: Weapon['id']) {
  return fetcher<Weapon>(frontApi('weapons/' + id), {
    cache: 'no-cache',
    headers: {
      cookie: getAllCookies(),
    },
  });
}
