import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

enum AppEnvEnum {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

enum HostEnum {
  Localhost = 'localhost',
  All = '0.0.0.0',
}

/**
 * ①
 * バリデーションしたい環境変数がある場合はここに記載してください。
 * バリデーションに失敗するとアプリケーションは起動しません。
 */
export class EnvValidator {
  @IsEnum(AppEnvEnum)
  APP_ENV: AppEnvEnum;

  @IsEnum(HostEnum)
  HOST: HostEnum;

  @IsNumber()
  PORT: number;

  @IsNotEmpty()
  @IsString()
  DATABASE_URL: string;

  @IsNotEmpty()
  @IsString()
  AUTH0_AUDIENCE: string;

  @IsNotEmpty()
  @IsString()
  AUTH0_ISSUER_URL: string;

  @IsNotEmpty()
  @IsString()
  AUTH0_CLIENT_SECRET: string;

  @IsNotEmpty()
  @IsString()
  NEXTAUTH_SECRET: string;
}

/**
 * ②
 * @param config バリデーション対象の Record<string, any>。今回は .env.development.local と 環境変数が合体したもの
 * @returns バリデーション済の Record<string, any>
 */
export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvValidator, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
