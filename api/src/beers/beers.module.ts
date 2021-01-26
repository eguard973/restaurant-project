import {HttpModule, Module} from '@nestjs/common';
import { BeersController } from './beers.controller';
import { BeersService } from './beers.service';

@Module({
  imports: [HttpModule],
  controllers: [BeersController],
  providers: [BeersService]
})
export class BeersModule {}
