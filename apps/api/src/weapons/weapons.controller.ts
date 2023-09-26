import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  // Request,
} from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { UpdateWeaponDto } from './dto/update-weapon.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Weapon } from '@prisma/client';
import { NextAuthGuard } from 'src/next-auth/next-auth.guard';
import { CustomRequest } from 'src/common/requests/custom-request';

// typeormだとInsertResultとかを扱うらしい
// https://zenn.dev/engineerhikaru/books/0a615c1248a2ea/viewer/6746bf

// ステータスコード
// https://qiita.com/ms2geki/items/c2d3b3f38aabb00052a8

@Controller('weapons')
@ApiTags('weapons') // swagger用のタグを追加
export class WeaponsController {
  constructor(private readonly weaponsService: WeaponsService) {}

  @Get()
  @HttpCode(200)
  // @Api〇〇() でswagger用のタグをいろいろつけられる
  async getAllWeapons(): Promise<Weapon[]> {
    return this.weaponsService.getAllWeapons();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  }) // exampleをつけないとdreddに怒られた
  async getWeapon(
    @Param('id')
    id: string
  ): Promise<Weapon> {
    return this.weaponsService.getWeapon(+id);
  }

  // DTOを使わない場合
  // @Post()
  // createWeapon(
  //   @Body()
  //   weaponData: {
  //     name: string;
  //     attackPower: number;
  //     attribute: string;
  //   },
  // ) {
  //   return this.weaponsService.createWeapon(weaponData);
  // }

  // DTOを使う場合
  @UseGuards(NextAuthGuard)
  @Post()
  async create(
    @Body()
    createWeaponDto: CreateWeaponDto,
    request: CustomRequest // NextAuthで認証したユーザー情報を取得する
  ): Promise<Weapon> {
    console.log(request);

    return this.weaponsService.createWeapon(createWeaponDto);
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  })
  @UseGuards(NextAuthGuard)
  async update(
    @Param('id')
    id: string,
    @Body()
    updateWeaponDto: UpdateWeaponDto
  ): Promise<Weapon> {
    return this.weaponsService.updateWeapon(+id, updateWeaponDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  })
  @UseGuards(NextAuthGuard)
  async delete(
    @Param('id')
    id: string
  ): Promise<Weapon> {
    return this.weaponsService.deleteWeapon(+id);
  }
}
