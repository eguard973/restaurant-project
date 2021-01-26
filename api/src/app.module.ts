import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModule } from './food/food.module';
import { Food } from "./food/food.entity";
import { BeersModule } from './beers/beers.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mongodb',
          host: 'localhost',
          database: 'restaurant',
          entities: [Food],
          synchronize: true,
      }),
      FoodModule,
      BeersModule
  ],
})
export class AppModule {}
