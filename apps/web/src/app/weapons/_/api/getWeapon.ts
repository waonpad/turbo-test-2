import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { frontApi } from '@/utils/url';

export function getWeapon(id: Weapon['id']) {
  return fetcher<Weapon>(frontApi('weapons/' + id), {
    cache: 'no-cache',
  });
}
