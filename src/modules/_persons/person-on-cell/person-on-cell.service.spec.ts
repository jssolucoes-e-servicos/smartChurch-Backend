import { Test, TestingModule } from '@nestjs/testing';
import { PersonOnCellService } from './person-on-cell.service';

describe('PersonOnCellService', () => {
  let service: PersonOnCellService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonOnCellService],
    }).compile();

    service = module.get<PersonOnCellService>(PersonOnCellService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
