import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'node:path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'aydearcas',
      password: 'postgres',
      database: 'my_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    PetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
