import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * アプリケーションモジュールで利用する設定値は、ここから取得します。
 */
@Injectable()
export class Env {
  constructor(private configService: ConfigService) {}

  isProduction(): boolean {
    return this.configService.get('APP_ENV') === 'production';
  }

  get service() {
    return this.configService;
  }

  get AppEnv(): string {
    return this.configService.get('APP_ENV');
  }

  get Port(): number {
    return this.configService.get('PORT');
  }

  // get DatabaseUrl(): string {
  //   return this.configService.get('DATABASE_URL');
  // }

  get Auth0Audience(): string {
    return this.configService.get('AUTH0_AUDIENCE');
  }

  get Auth0IssuerUrl(): string {
    return this.configService.get('AUTH0_ISSUER_URL');
  }

  get Auth0ClientSecret(): string {
    return this.configService.get('AUTH0_CLIENT_SECRET');
  }
}
