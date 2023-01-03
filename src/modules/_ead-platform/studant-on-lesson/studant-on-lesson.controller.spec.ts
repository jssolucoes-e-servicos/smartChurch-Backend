import { Test, TestingModule } from '@nestjs/testing';
import { StudantOnLessonController } from './studant-on-lesson.controller';
import { StudantOnLessonService } from './studant-on-lesson.service';

describe('StudantOnLessonController', () => {
  let controller: StudantOnLessonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudantOnLessonController],
      providers: [StudantOnLessonService],
    }).compile();

    controller = module.get<StudantOnLessonController>(StudantOnLessonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
