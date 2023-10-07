import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { getAllCookies } from '@/utils/cookie/getAllCookies';
import { hostApi } from '@/utils/url/hostApi';

export function getWeapon(id: Weapon['id']) {
  return fetcher<Weapon>(hostApi('weapons/' + id), {
    cache: 'no-cache',
    headers: {
      cookie: getAllCookies(),
    },
  });
}
