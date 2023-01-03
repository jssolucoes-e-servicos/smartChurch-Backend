import { Test, TestingModule } from '@nestjs/testing';
import { CourseLessonController } from './course-lesson.controller';
import { CourseLessonService } from './course-lesson.service';

describe('CourseLessonController', () => {
  let controller: CourseLessonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseLessonController],
      providers: [CourseLessonService],
    }).compile();

    controller = module.get<CourseLessonController>(CourseLessonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
