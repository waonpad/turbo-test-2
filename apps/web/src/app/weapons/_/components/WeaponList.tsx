import Link from 'next/link';
import { getWeapons } from '../api/getWeapons';

export async function WeaponList() {
  const { data: weapons } = await getWeapons();

  return (
    <ul>
      {(weapons ?? []).map((weapon) => (
        <li key={weapon.id}>
          <Link href={`/weapons/${weapon.id}`}>{weapon.name}</Link>
        </li>
      ))}
    </ul>
  );
}
