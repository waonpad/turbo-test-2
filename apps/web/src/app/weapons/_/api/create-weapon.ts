import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { hostApi } from '@/utils/url/host-api';

export type CreateWeapoForm = Omit<Weapon, 'id'>;

export function createWeapon(weapon: CreateWeapoForm) {
  return fetcher<Weapon>(hostApi('weapons'), {
    method: 'POST',
    body: JSON.stringify(weapon),
  });
}
