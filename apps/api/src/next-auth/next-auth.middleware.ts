// import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
// import { NextFunction } from 'express';
// import { Env } from 'src/config/environments/env.service';

// // Next側のAuthRestAdaptorがNextAuthを使う時はx-auth-secretをヘッダーに付与しているので、
// // NextAuthを通してアクセスしているかをこのMiddlewareで確認する

// @Injectable()
// export class NextAuthMiddleware implements NestMiddleware {
//   constructor(private env: Env) {}

//   async use(req: Request, _res: Response, next: NextFunction) {
//     if (req.headers['x-auth-secret'] !== this.env.NextAuthSecret) {
//       throw new UnauthorizedException('Auth secret not provided or incorrect');
//     }

//     next();
//   }
// }
