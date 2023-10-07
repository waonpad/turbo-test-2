import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { hostApi } from '@/utils/url/hostApi';

export function deleteWeapon(id: Weapon['id']) {
  return fetcher<Weapon>(hostApi('weapons/' + id), {
    method: 'DELETE',
  });
}
