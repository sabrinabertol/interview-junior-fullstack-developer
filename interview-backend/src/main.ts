import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // This is a security feature that allows the frontend to access the backend. 
  await app.listen(3000);
}
bootstrap();
