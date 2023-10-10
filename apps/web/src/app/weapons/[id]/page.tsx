import Link from 'next/link';
import { getWeapon } from '../_/api/get-weapon';
import { DeleteWeapon } from '../_/components/delete-weapon';

export default async function Page({ params }: { params: { id: string } }) {
  const { data: weapon } = await getWeapon(Number(params.id));

  if (!weapon) {
    return <div>Not Found</div>;
  }

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">詳細</h1>
      <p>ID: {weapon.id}</p>
      <p>名前: {weapon.name}</p>
      <p>攻撃力: {weapon.attackPower}</p>
      <p>属性: {weapon.attribute}</p>
      <DeleteWeapon id={weapon.id} />
      <Link href={`/weapons/${weapon.id}/update`}>Update</Link>
    </div>
  );
}
