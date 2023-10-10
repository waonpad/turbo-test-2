import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

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

  get Host(): string {
    return this.configService.get('HOST');
  }

  get Port(): number {
    return this.configService.get('PORT');
  }

  get Auth0Audience(): string {
    return this.configService.get('AUTH0_AUDIENCE');
  }

  get Auth0IssuerUrl(): string {
    return this.configService.get('AUTH0_ISSUER_URL');
  }

  get Auth0ClientSecret(): string {
    return this.configService.get('AUTH0_CLIENT_SECRET');
  }

  get NextAuthSecret(): string {
    return this.configService.get('NEXTAUTH_SECRET');
  }
}
