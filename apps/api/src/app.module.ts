import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeaponsModule } from './weapons/weapons.module';
import { LoggerModule } from './logger/logger.module';
import { LoggerInterceptor } from './interceptors/logging.inspector';
import { EnvModule } from './config/environments/env.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthzModule } from './authz/authz.module';

@Module({
  //importsは他のModuleでexportされたProviderを自身のModule内で使えるようにする
  imports: [
    WeaponsModule,
    LoggerModule,
    EnvModule,
    AuthzModule, // 認証を試してみる
    // TypeOrmModule.forRoot({ ...
  ],
  //インスタンス化して、Controllerが何かを定義している
  controllers: [AppController],
  //インスタンス化して、このModule内で使用する可能性のあるproviderを定義している
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: LoggerInterceptor },
  ],
  //他のModuleで使いたいProviderを定義する
  // exports: ,
})
export class AppModule {}
