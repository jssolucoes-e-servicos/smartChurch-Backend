import { Test, TestingModule } from '@nestjs/testing';
import { PersonOnDepartamentService } from './person-on-departament.service';

describe('PersonOnDepartamentService', () => {
  let service: PersonOnDepartamentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonOnDepartamentService],
    }).compile();

    service = module.get<PersonOnDepartamentService>(PersonOnDepartamentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
