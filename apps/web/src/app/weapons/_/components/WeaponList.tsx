import Link from 'next/link';
import { getWeapons } from '../api/getWeapons';

export async function WeaponList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res = await getWeapons();

  console.log('れす');
  console.log(res);

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
