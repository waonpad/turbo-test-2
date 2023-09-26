'use client';
import { Weapon } from 'database';
import { useRouter } from 'next/navigation';
import { deleteWeapon } from '../api/deleteWeapon';

export function DeleteWeapon({ id }: { id: Weapon['id'] }) {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteWeapon(id);

    router.push('/weapons');
  };

  return (
    <button onClick={handleDelete} className="rounded-lg bg-red-500 px-2 py-1 text-white">
      Delete
    </button>
  );
}
