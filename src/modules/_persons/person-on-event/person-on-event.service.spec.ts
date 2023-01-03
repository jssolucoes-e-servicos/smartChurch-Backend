import { Test, TestingModule } from '@nestjs/testing';
import { PersonOnEventService } from './person-on-event.service';

describe('PersonOnEventService', () => {
  let service: PersonOnEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonOnEventService],
    }).compile();

    service = module.get<PersonOnEventService>(PersonOnEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
