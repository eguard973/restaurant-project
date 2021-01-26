import { Test, TestingModule } from '@nestjs/testing';
import { BeersService } from './beers.service';
import {HttpModule, HttpService} from "@nestjs/common";
import {of} from "rxjs";

describe('BeersService', () => {
  let service: BeersService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeersService],
      imports: [HttpModule],
    }).compile();

    service = module.get<BeersService>(BeersService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
