import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { decode } from 'next-auth/jwt';
import { Env } from 'src/config/environments/env.service';

// トークンを受け取り、でコードして、ユーザー情報をリクエストに追加する
// @User user: AuthUserでアクセスできる

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private env: Env) {}

  async use(req: Request, _res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    try {
      const decoded = await decode({
        token: token,
        secret: this.env.NextAuthSecret,
      });

      if (decoded?.sub) {
        // sub is UserID
        req.user = decoded;
      }

      return next();
    } catch (err) {
      console.log('UserMiddleware error', err);
      return next();
    }
  }
}
