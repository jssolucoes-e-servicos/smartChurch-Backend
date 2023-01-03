import { Test, TestingModule } from '@nestjs/testing';
import { PersonOnDepartamentController } from './person-on-departament.controller';
import { PersonOnDepartamentService } from './person-on-departament.service';

describe('PersonOnDepartamentController', () => {
  let controller: PersonOnDepartamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonOnDepartamentController],
      providers: [PersonOnDepartamentService],
    }).compile();

    controller = module.get<PersonOnDepartamentController>(PersonOnDepartamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
