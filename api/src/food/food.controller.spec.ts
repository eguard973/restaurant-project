import { Test, TestingModule } from '@nestjs/testing';
import { FoodController } from './food.controller';
import {FoodService} from "./food.service";
import {getRepository, Repository} from "typeorm";
import {Food} from "./food.entity";
import {getRepositoryToken} from "@nestjs/typeorm";

describe('FoodController', () => {
  let controller: FoodController;
  let service: FoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodController],
      providers: [
          FoodService,
          {
            provide: getRepositoryToken(Food),
            useClass: Repository
          }
      ]
    }).compile();

    controller = module.get<FoodController>(FoodController);
    service = module.get<FoodService>(FoodService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return for findAll', async () => {
    const testFood: Food =  {
      id: 1,
      name: 'burger',
      description: 'the description',
      price: 1.5,
      type: 'dessert'
    };
    jest.spyOn(service, 'findAll').mockResolvedValueOnce([testFood]);
    expect(await controller.findAll()).toEqual([testFood]);
  });
});
