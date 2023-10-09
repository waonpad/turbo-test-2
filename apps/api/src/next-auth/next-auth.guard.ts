// https://zenn.dev/web3ten0/articles/d0417c9c10ec04

// NextAuthの認証をNestJSで使う
// jwtを受け取り、デコードしてユーザー情報を取得する

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { decode } from 'next-auth/jwt';
// import { Env } from 'src/config/environments/env.service';
import { Request } from 'express';

@Injectable()
export class NextAuthGuard implements CanActivate {
  // constructor(private env: Env) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    // user.middleware.tsでreq.userにユーザー情報かnullをセットしているので、
    // それがあれば認証済みとみなす
    return request.user ? true : false;

    // const authorization = request.headers?.authorization;
    // if (!authorization) return false;

    // const token = authorization.split(' ')[1];
    // if (!token) return false;

    // const secret = this.env.NextAuthSecret;
    // if (!secret) return false;

    // try {
    //   const decoded = await decode({ token, secret });

    //   if (!decoded) return false;

    //   request.user = decoded;

    //   return true;
    // } catch (error) {
    //   console.error(error);

    //   return false;
    // }
  }
}
