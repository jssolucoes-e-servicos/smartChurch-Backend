import { Test, TestingModule } from '@nestjs/testing';
import { PersonFamilyController } from './person-family.controller';
import { PersonFamilyService } from './person-family.service';

describe('PersonFamilyController', () => {
  let controller: PersonFamilyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonFamilyController],
      providers: [PersonFamilyService],
    }).compile();

    controller = module.get<PersonFamilyController>(PersonFamilyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
