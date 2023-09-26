import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { frontApi } from '@/utils/url';

export function deleteWeapon(id: Weapon['id']) {
  return fetcher<Weapon>(frontApi('weapons/' + id), {
    method: 'DELETE',
  });
}
