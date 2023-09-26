import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { frontApi } from '@/utils/url';

export function getWeapons() {
  return fetcher<Weapon[]>(frontApi('weapons'), {
    cache: 'no-cache',
  });
}
