import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroResolver } from './hero/hero.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, HeroResolver],
})
export class AppModule {}
