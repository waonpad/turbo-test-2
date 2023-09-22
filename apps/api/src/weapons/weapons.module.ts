import { Module } from '@nestjs/common';
import { WeaponsController } from './weapons.controller';
import { WeaponsService } from './weapons.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthzModule } from 'src/authz/authz.module';
// import { LoggerModule } from 'src/logger/logger.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [LoggerModule], いらないらしい
  imports: [AuthzModule], // 認証を試してみる
  // typeorm
  // imports: [TypeOrmModule.forFeature([Weapon])],
  controllers: [WeaponsController],
  providers: [WeaponsService, PrismaService], // PrismaServiceを利用するのでここに追加
})
export class WeaponsModule {}
