import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { NextAuthGuard } from './next-auth/next-auth.guard';
import { AuthUser } from './user/auth-user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(NextAuthGuard)
  @Get('danger')
  getDanger(@Req() req: Request): AuthUser {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return req.user;
  }
}
