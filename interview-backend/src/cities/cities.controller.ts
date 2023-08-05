/* The CitiesController class is a NestJS controller that handles requests related to cities and uses
the CitiesService to retrieve cities data. */

import { Controller, Get, Injectable } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
@Injectable()
export class CitiesController {

  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getCities() {
    const cities = this.citiesService.getCities();
    return cities;
  }
}
