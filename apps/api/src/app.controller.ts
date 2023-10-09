import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AppService } from './app.service';
import { AuthUser } from './user/auth-user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('jwt')) // 認証を試してみる // これはauth0のjwtでやってみた
  @Get('danger')
  getDanger(@Req() req: Request): AuthUser {
    console.log(req.user);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return req.user;
  }
}
