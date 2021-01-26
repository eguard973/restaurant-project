import { Injectable } from '@nestjs/common';
import { Food } from "./food.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(Food)
        private readonly foodRepository: Repository<Food>
    ) {
    }

    async findAll(): Promise<Food[]> {
        return this.foodRepository.find();
    }
}
