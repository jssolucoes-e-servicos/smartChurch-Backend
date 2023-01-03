import { Test, TestingModule } from '@nestjs/testing';
import { PersonOnCellController } from './person-on-cell.controller';
import { PersonOnCellService } from './person-on-cell.service';

describe('PersonOnCellController', () => {
  let controller: PersonOnCellController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonOnCellController],
      providers: [PersonOnCellService],
    }).compile();

    controller = module.get<PersonOnCellController>(PersonOnCellController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
