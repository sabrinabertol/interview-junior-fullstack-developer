import { Component } from '@angular/core';
import { SearchFormService } from './search-form.service';
import  { City } from './search-form.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  cities: City[] = [];
  
  constructor(private service: SearchFormService) {}

  search(term: string) {
    this.service.searchCities(term)
      .subscribe(cities => {
        this.cities = cities;
      });
  }
}