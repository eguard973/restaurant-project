import { Test, TestingModule } from '@nestjs/testing';
import { BeersController } from './beers.controller';
import {BeersService} from "./beers.service";
import {HttpModule} from "@nestjs/common";
import {Beer} from "../../dist/beers/beer.entity";

describe('BeersController', () => {
  let controller: BeersController;
  let service: BeersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeersController],
      providers: [BeersService],
      imports:[HttpModule]
    }).compile();

    controller = module.get<BeersController>(BeersController);
    service = module.get<BeersService>(BeersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
