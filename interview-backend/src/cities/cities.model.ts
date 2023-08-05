export interface Cities { 
    cities: Array<City>; 
} 

export interface City { 
    uuid: string; 
    cityName: string; 
    count: number; 
}