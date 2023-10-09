import { writeFileSync } from 'fs';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { dump } from 'js-yaml';
import { AppModule } from './app.module';
import { Env } from './config/environments/env.service';

async function bootstrap() {
  // (1) アプリケーションのインスタンスを作成する
  // 引数に渡しているAppModuleはアプリケーションのルートモジュール
  const app = await NestFactory.create(AppModule);

  const env: Env = app.get(Env);

  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  }); // CORSを有効化

  // (2) DocumentBuilderでSwaggerのAPIドキュメントの設定を行う
  const config = new DocumentBuilder()
    // タイトル設定
    .setTitle('DQ Weapons API')
    // APIドキュメントの概要を説明
    .setDescription('The DQ Weapons API description')
    // バージョンの表記
    .setVersion('1.0')
    // 設定の完了
    .build();

  // (3) SwaggerモジュールにAPIドキュメントを出力させる
  const document = SwaggerModule.createDocument(app, config);

  // (4) 生成したAPIドキュメンテーションを指定したパス(/api)に公開する
  // /apiにアクセスすると、Swagger UIを経由してAPIドキュメンテーションを閲覧できる
  SwaggerModule.setup('api', app, document);

  // OpenAPI用のファイルを出力する
  const openApiOutputPath = path.resolve(process.cwd(), 'openapi.yml');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  writeFileSync(openApiOutputPath, dump(document, {}));

  // (5) NestJSアプリケーションを指定したポートで起動する。ここでは3000
  await app.listen(env.Port, env.Host);
}
bootstrap();
