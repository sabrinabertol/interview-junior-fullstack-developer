import { Controller, Get, Injectable, HttpException, HttpStatus, Query, } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('api/cities')
@Injectable()
export class CitiesController {

  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getCities() { 
    return this.citiesService.getCities();
  }

  @Get(':term') 
  async searchCities(@Query('term') term: string) {
    const cities = await this.citiesService.searchCities(term);
    if (!cities) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return cities;
  }

}



