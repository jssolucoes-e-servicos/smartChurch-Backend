import { Test, TestingModule } from '@nestjs/testing';
import { CourseReadingResponseController } from './course-reading-response.controller';
import { CourseReadingResponseService } from './course-reading-response.service';

describe('CourseReadingResponseController', () => {
  let controller: CourseReadingResponseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseReadingResponseController],
      providers: [CourseReadingResponseService],
    }).compile();

    controller = module.get<CourseReadingResponseController>(CourseReadingResponseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
