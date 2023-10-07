import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { hostApi } from '@/utils/url/hostApi';

export type UpdateWeapoForm = Weapon;

export function updateWeapon(weapon: UpdateWeapoForm) {
  return fetcher<Weapon>(hostApi(`/weapons/${weapon.id}`), {
    method: 'PUT',
    body: JSON.stringify(weapon),
  });
}
