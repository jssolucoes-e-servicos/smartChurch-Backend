import { Test, TestingModule } from '@nestjs/testing';
import { PersonAdressService } from './person-adress.service';

describe('PersonAdressService', () => {
  let service: PersonAdressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonAdressService],
    }).compile();

    service = module.get<PersonAdressService>(PersonAdressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
