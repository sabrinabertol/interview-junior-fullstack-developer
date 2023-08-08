import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Observable, of } from 'rxjs';

export interface City {
  cityName: string;
  uuid: string;
  count: number;
}

@Injectable()
export class CitiesService {

  private cities: City[] = [];

  constructor() {
    this.cities = JSON.parse(fs.readFileSync('./../cities.json', 'utf8'));
  }
 
  getCities(): City[] {
    return this.cities;
  }

  getCity(cityName: string): City { 
    return this.cities.find(c => c.cityName === cityName);
  }


  searchCities(term: string): Observable<City[]> {
    const filtered = this.cities.filter(c => 
      c.cityName.toLowerCase().includes(term.toLowerCase())
    );

    const results = filtered.slice(0, 5);
    return of(results);
  }

}
