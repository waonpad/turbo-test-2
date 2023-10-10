'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createWeapon } from '../api/create-weapon';
import type { CreateWeapoForm } from '../api/create-weapon';

export function CreateWeapon() {
  const router = useRouter();

  const weaponFormDefault: CreateWeapoForm = {
    name: 'test-weapon',
    attackPower: 0,
    attribute: 'sword',
  };

  const [weapon, setWeapon] = useState<CreateWeapoForm>(weaponFormDefault);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    createWeapon(weapon);

    setWeapon(weaponFormDefault);

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4">
      <div>
        <label htmlFor="name">name:</label>
        <input
          value={weapon.name}
          onChange={(e) => setWeapon({ ...weapon, name: e.target.value })}
          className="border"
          required
        />
      </div>
      <div>
        <label htmlFor="attackPower">attackPower:</label>
        <input
          value={weapon.attackPower}
          onChange={(e) => setWeapon({ ...weapon, attackPower: Number(e.target.value) })}
          className="border"
          required
          type="number"
        />
      </div>
      <div>
        <label htmlFor="attribute">attribute:</label>
        <input
          value={weapon.attribute}
          onChange={(e) => setWeapon({ ...weapon, attribute: e.target.value })}
          className="border"
          required
        />
      </div>
      <div>
        <button type="submit" className="rounded-lg bg-blue-500 px-2 py-1 text-white">
          Submit
        </button>
      </div>
    </form>
  );
}
