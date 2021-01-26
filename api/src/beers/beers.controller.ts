import {Controller, Get} from '@nestjs/common';
import {BeersService} from "./beers.service";
import {Observable} from "rxjs";

@Controller('beers')
export class BeersController {
    constructor(private beersService: BeersService) {}

    @Get()
    async findAll(): Promise<Observable<any>> {
        return this.beersService.findAll();
    }
}
