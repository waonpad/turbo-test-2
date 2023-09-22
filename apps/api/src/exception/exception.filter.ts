// import {
//   ExceptionFilter as ExceptionFilterOrigin,
//   Catch,
//   ArgumentsHost,
//   HttpException,
//   HttpStatus,
// } from '@nestjs/common';
// import { LoggerService } from 'src/logger/logger.service';
// import { FastifyReply } from 'fastify';

// @Catch()
// export class ExceptionFilter implements ExceptionFilterOrigin {
//   constructor(private readonly log: LoggerService) {}

//   private readonly selectStatus = (exception: unknown): number => {
//     return exception instanceof HttpException
//       ? exception.getStatus()
//       : HttpStatus.INTERNAL_SERVER_ERROR;
//   };

//   private readonly selectErrorText = (
//     exception: unknown,
//   ): { message: string; stack: string } => {
//     if (exception instanceof Error) {
//       return { message: exception.message, stack: exception.stack };
//     } else if (exception instanceof HttpException) {
//       return { message: exception.message, stack: exception.stack };
//     } else {
//       return { message: 'unknown message', stack: 'unknown stack' };
//     }
//   };

//   public catch(exception: unknown, host: ArgumentsHost) {
//     const context = host.switchToHttp();
//     const response = context.getResponse<FastifyReply>();
//     const request = context.getRequest();

//     // ロギングとレスポンスのための変数を定義
//     const status = this.selectStatus(exception);
//     const message = this.selectErrorText(exception).message;
//     const stack = this.selectErrorText(exception).stack;
//     const uid = request.uid ? request.uid : 'anonymous';
//     const url = request.url;
//     const method = request.method;

//     // ロギング
//     this.log.error({ url, method, uid, message: `${message} : ${stack}` });

//     // レスポンス
//     response.status(status).send({ statusCode: status, message });
//   }
// }
