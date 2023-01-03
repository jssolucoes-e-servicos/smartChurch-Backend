import { Test, TestingModule } from '@nestjs/testing';
import { StudantOnClassController } from './studant-on-class.controller';
import { StudantOnClassService } from './studant-on-class.service';

describe('StudantOnClassController', () => {
  let controller: StudantOnClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudantOnClassController],
      providers: [StudantOnClassService],
    }).compile();

    controller = module.get<StudantOnClassController>(StudantOnClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
