import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { hostApi } from '@/utils/url/host-api';

export function deleteWeapon(id: Weapon['id']) {
  return fetcher<Weapon>(hostApi('weapons/' + id), {
    method: 'DELETE',
  });
}
