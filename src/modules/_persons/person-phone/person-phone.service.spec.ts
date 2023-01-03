import { Test, TestingModule } from '@nestjs/testing';
import { PersonPhoneService } from './person-phone.service';

describe('PersonPhoneService', () => {
  let service: PersonPhoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonPhoneService],
    }).compile();

    service = module.get<PersonPhoneService>(PersonPhoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
