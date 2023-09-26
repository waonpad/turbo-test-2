'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateWeapon } from '../api/updateWeapon';
import type { UpdateWeapoForm } from '../api/updateWeapon';
import type { Weapon } from 'database';

export function UpdateWeapon(weapon: Weapon) {
  const router = useRouter();

  const [weaponForm, setWeapon] = useState<UpdateWeapoForm>(weapon);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    updateWeapon(weaponForm);

    router.push(`/weapons/${weapon.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4">
      <div>
        <label htmlFor="name">name:</label>
        <input
          value={weaponForm.name}
          onChange={(e) => setWeapon({ ...weaponForm, name: e.target.value })}
          className="border"
          required
        />
      </div>
      <div>
        <label htmlFor="attackPower">attackPower:</label>
        <input
          value={weaponForm.attackPower}
          onChange={(e) => setWeapon({ ...weaponForm, attackPower: Number(e.target.value) })}
          className="border"
          required
        />
      </div>
      <div>
        <label htmlFor="attribute">attribute:</label>
        <input
          value={weaponForm.attribute}
          onChange={(e) => setWeapon({ ...weaponForm, attribute: e.target.value })}
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
