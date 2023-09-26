import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { frontApi } from '@/utils/url';

export type UpdateWeapoForm = Weapon;

export function updateWeapon(weapon: UpdateWeapoForm) {
  return fetcher<Weapon>(frontApi(`/weapons/${weapon.id}`), {
    method: 'PUT',
    body: JSON.stringify(weapon),
  });
}
