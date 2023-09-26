import { getWeapon } from '../../_/api/getWeapon';
import { UpdateWeapon } from '../../_/components/UpdateWeapon';

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
