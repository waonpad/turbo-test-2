import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { frontApi } from '@/utils/url';

export type CreateWeapoForm = Omit<Weapon, 'id'>;

export function createWeapon(weapon: CreateWeapoForm) {
  return fetcher<Weapon>(frontApi('weapons'), {
    method: 'POST',
    body: JSON.stringify(weapon),
  });
}
