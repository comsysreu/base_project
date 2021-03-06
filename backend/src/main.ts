import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { frontend } from './common/middleware/frontend/frontend.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(frontend);
  await app.listen(3000);
}
bootstrap();
