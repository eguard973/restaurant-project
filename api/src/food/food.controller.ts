import {Controller, Get} from '@nestjs/common';
import { FoodService } from "./food.service";
import {Food} from "./food.entity";

@Controller('food')
export class FoodController {
    constructor(private foodService: FoodService) {}

    @Get()
    async findAll(): Promise<Food[]> {
        return this.foodService.findAll();
    }

}
