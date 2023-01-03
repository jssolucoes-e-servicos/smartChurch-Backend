import { Test, TestingModule } from '@nestjs/testing';
import { PersonPhoneController } from './person-phone.controller';
import { PersonPhoneService } from './person-phone.service';

describe('PersonPhoneController', () => {
  let controller: PersonPhoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonPhoneController],
      providers: [PersonPhoneService],
    }).compile();

    controller = module.get<PersonPhoneController>(PersonPhoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
