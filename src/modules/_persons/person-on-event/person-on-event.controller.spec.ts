import { Test, TestingModule } from '@nestjs/testing';
import { PersonOnEventController } from './person-on-event.controller';
import { PersonOnEventService } from './person-on-event.service';

describe('PersonOnEventController', () => {
  let controller: PersonOnEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonOnEventController],
      providers: [PersonOnEventService],
    }).compile();

    controller = module.get<PersonOnEventController>(PersonOnEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
