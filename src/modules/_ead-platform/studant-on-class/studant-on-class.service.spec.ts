import { Test, TestingModule } from '@nestjs/testing';
import { StudantOnClassService } from './studant-on-class.service';

describe('StudantOnClassService', () => {
  let service: StudantOnClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudantOnClassService],
    }).compile();

    service = module.get<StudantOnClassService>(StudantOnClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
