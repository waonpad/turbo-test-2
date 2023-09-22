// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// import { Injectable } from '@nestjs/common';
// import { LoggingService } from './logging/logging.service';

// @Injectable()
// export class AppService {
//   constructor(private readonly logger: LoggingService) {}

//   getHello(): string {
//     // info
//     this.logger.log('関数を実行します。', 'app', 'getHello');

//     // error
//     this.logger.error(
//       'エラーが発生しました。',
//       new Error('error in app.service'),
//       'app',
//       'getHello',
//     );

//     return 'Hello World!';
//   }
// }
