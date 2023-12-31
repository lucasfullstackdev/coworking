import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('API para gestão de coworkings')
    .setDescription(
      'Gerencie todos aspectos que envolvem um coworking de maneira simples, rápida e segura',
    )
    .setVersion('1.0')
    .addTag('coworkings', 'Gerencie seu coworking')
    .addTag('services', 'Gerencie os serviços disponíveis')
    .addTag(
      'Coworking Services',
      'Gerencie os serviços prestados pelo seu coworking',
    )
    .addTag(
      'Coworking Rooms',
      'Gerencie as salas pertencentes ao seu coworking',
    )
    .addTag('Customers', 'Gerencie os clientes do seu coworking')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(3000);
}
bootstrap();
