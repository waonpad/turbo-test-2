import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { AuthUser } from './auth-user';

export const User = createParamDecorator((data: keyof AuthUser, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();
  if (data) {
    const user = request.user as AuthUser;
    return user ? user[data] : null;
  }
  return request.user as AuthUser;
});
