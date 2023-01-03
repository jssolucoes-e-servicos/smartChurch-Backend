import { Test, TestingModule } from '@nestjs/testing';
import { PersonAdressController } from './person-adress.controller';
import { PersonAdressService } from './person-adress.service';

describe('PersonAdressController', () => {
  let controller: PersonAdressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonAdressController],
      providers: [PersonAdressService],
    }).compile();

    controller = module.get<PersonAdressController>(PersonAdressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
