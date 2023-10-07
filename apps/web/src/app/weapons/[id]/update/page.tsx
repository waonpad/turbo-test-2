import { getWeapon } from '../../_/api/get-weapon';
import { UpdateWeapon } from '../../_/components/update-weapon';

export default async function Page({ params }: { params: { id: string } }) {
  const { data: weapon } = await getWeapon(Number(params.id));

  if (!weapon) {
    return <div>Not Found</div>;
  }

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">武器更新</h1>
      <UpdateWeapon {...weapon} />
    </div>
  );
}
