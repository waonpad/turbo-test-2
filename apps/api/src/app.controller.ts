import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('jwt')) // 認証を試してみる // これはauth0のjwtでやってみた
  @Get('danger')
  getDanger(
    @Request()
    req
  ) {
    console.log(req.user);

    return req.user;
  }
}
