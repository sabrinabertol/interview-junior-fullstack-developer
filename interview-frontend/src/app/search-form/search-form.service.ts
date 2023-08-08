import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface City {
  cityName: string;
  uuid: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {

  host = 'http://localhost:3000/api/cities/';
  // eslint-disable-next-line @typescript-eslint/no-empty-function

  constructor(private http: HttpClient) {}

/**
 * The searchCities function sends an HTTP GET request to retrieve a list of cities based on a search
 * term and returns the response as an array of City objects.
 * @param {string} term - The term parameter is a string that represents the search term or keyword
 * that is used to search for cities.
 * @returns The `searchCities` function is returning an HTTP GET request to the specified URL with the
 * provided search term. The response data is then mapped to an array of `City` objects.
 */
  searchCities(term: string) {
    return this.http.get(`${this.host}${term}`)
      .pipe(
        map(data => data as City[])
      );
  }

}