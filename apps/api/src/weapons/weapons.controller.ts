import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { UpdateWeaponDto } from './dto/update-weapon.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Weapon } from '@prisma/client';
import { NextAuthGuard } from 'src/next-auth/next-auth.guard';
import { Request } from 'express';
import { User } from 'src/user/user.decorator';
import { AuthUser } from 'src/user/auth-user';

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
  @UseGuards(NextAuthGuard)
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

  @UseGuards(NextAuthGuard)
  @Post()
  async create(
    @Body()
    createWeaponDto: CreateWeaponDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Req() request: Request, // NextAuthで認証したユーザー情報を取得する
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @User() user: AuthUser
  ): Promise<Weapon> {
    // console.log(request);
    // console.log(user);

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
