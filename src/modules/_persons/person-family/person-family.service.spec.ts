import { Test, TestingModule } from '@nestjs/testing';
import { PersonFamilyService } from './person-family.service';

describe('PersonFamilyService', () => {
  let service: PersonFamilyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonFamilyService],
    }).compile();

    service = module.get<PersonFamilyService>(PersonFamilyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
