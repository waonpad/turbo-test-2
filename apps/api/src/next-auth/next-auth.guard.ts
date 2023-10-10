import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class NextAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    // user.middleware.tsでreq.userにユーザー情報かnullをセットしているので、
    // それがあれば認証済みとみなす
    return request.user ? true : false;
  }
}
