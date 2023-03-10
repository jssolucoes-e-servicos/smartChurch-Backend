import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  //create a nest factory
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //configure this wwagger
  const config = new DocumentBuilder()
    .setTitle('smartChurch API')
    .setDescription(
      'A smartChurh API exists to connection of services and devices  with service central',
    )
    .setVersion('1.0')
    .addTag('church')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  //config cors
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  await app.listen(AppModule.port || 3111);
}
bootstrap();
