import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { PrismaClient, Weapon } from '@prisma/client';
import { Weapon } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { UpdateWeaponDto } from './dto/update-weapon.dto';
// import { Repository } from 'typeorm';

@Injectable()
export class WeaponsService {
  constructor(private readonly prisma: PrismaService) {}

  // constructor(
  //   @InjectRepository(Weapon)
  //   private readonly weaponsRepository: Repository<Weapon>,
  // ) {}

  async getAllWeapons(): Promise<Weapon[]> {
    return this.prisma.weapon.findMany();

    // typeorm
    // const weapons = await this.weaponsRepository.find();
    // return weapons;
  }

  async getWeapon(id: number): Promise<Weapon> {
    return this.prisma.weapon.findUnique({ where: { id } });

    // typeorm
    // const weapon = await this.weaponsRepository.findOne(id);
    // return weapon;
  }

  async createWeapon(data: CreateWeaponDto): Promise<Weapon> {
    return this.prisma.weapon.create({ data });

    // typeorm
    // const weapon = this.weaponsRepository.create(data);
    // return this.weaponsRepository.save(weapon);
  }

  async updateWeapon(id: number, data: UpdateWeaponDto): Promise<Weapon> {
    return this.prisma.weapon.update({ where: { id }, data });

    // typeorm
    // const weapon = await this.weaponsRepository.findOne(id);
    // this.weaponsRepository.merge(weapon, data);
    // return this.weaponsRepository.save(weapon);
  }

  async deleteWeapon(id: number): Promise<Weapon> {
    return this.prisma.weapon.delete({ where: { id } });

    // typeorm
    // const weapon = await this.weaponsRepository.findOne(id);
    // return this.weaponsRepository.remove(weapon);
  }
}
