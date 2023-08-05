/* The `CitiesService` class is an injectable service that provides a method to read and parse a JSON
file containing cities data. */

import { Injectable } from '@nestjs/common';
import { readFile } from 'fs';
import { Cities } from './cities.model';

@Injectable()
export class CitiesService {
  async getCities(): Promise<Cities[]> {
    return new Promise((resolve, reject) => {
      readFile('./../cities.json', (err, data) => {
        
        if (err) {
          reject(err);
        }
        const dataStr = data.toString(); 
        const cities = JSON.parse(dataStr);      
        resolve(cities);       
      });
    });
  }

}