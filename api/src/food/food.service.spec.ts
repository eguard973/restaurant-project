import { Test, TestingModule } from '@nestjs/testing';
import { FoodService } from './food.service';
import {getRepositoryToken} from "@nestjs/typeorm";
import {Food} from "./food.entity";
import {ObjectID, Repository} from "typeorm";

describe('FoodService', () => {
  let service: FoodService;
  let repo: Repository<Food>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FoodService,
        {
          provide: getRepositoryToken(Food),
          useClass: Repository
        }
      ],
    }).compile();

    service = module.get<FoodService>(FoodService);
    repo = module.get<Repository<Food>>(getRepositoryToken(Food));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return for findAll', async () => {
    const testFood: Food =  {
      id: 1,
      name: 'burger',
      description: 'the description',
      price: 1.5,
      type: 'dessert'
    };
    jest.spyOn(repo, 'find').mockResolvedValueOnce([testFood]);
    expect(await service.findAll()).toEqual([testFood]);
  });
});
