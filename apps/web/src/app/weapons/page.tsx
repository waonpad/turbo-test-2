import { CreateWeapon } from './_/components/create-weapon';
import { WeaponList } from './_/components/weapon-list';

export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">武器一覧</h1>
      <WeaponList />
      <CreateWeapon />
    </div>
  );
}
