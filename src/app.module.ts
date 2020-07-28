import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroResolver } from './hero/hero.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { CustomIDScalar } from './hero/scalars/customID.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './schema.gql',
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, HeroResolver, CustomIDScalar],
})
export class AppModule {}
