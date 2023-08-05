import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitiesService],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

/*import { Test } from '@nestjs/testing';
import { CitiesService } from './cities.service';
import { readFile } from 'fs';


describe('CitiesService', () => {

  let service: CitiesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CitiesService],
    }).compile();

    service = module.get(CitiesService);
  });

  it('should return array of cities', async () => {

    // Mock readFile on service instance
    jest.spyOn(readFile).mockImplementation((_path, callback) => {
      callback(null, '{"cities": ["City 1", "City 2"]}');
    });
    
    const cities = await service.getCities();

    expect(cities).toEqual(['City 1', 'City 2']);
  });

  it('should return error on readFile error', async () => {
    
    jest.spyOn(service, 'readFile').mockImplementation((path, callback) => {
      callback('File read error');
    });

    await expect(service.getCities()).rejects.toThrow('File read error');
  });

}); */