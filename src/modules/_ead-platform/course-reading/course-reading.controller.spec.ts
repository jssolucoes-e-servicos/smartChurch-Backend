import { Test, TestingModule } from '@nestjs/testing';
import { CourseReadingController } from './course-reading.controller';
import { CourseReadingService } from './course-reading.service';

describe('CourseReadingController', () => {
  let controller: CourseReadingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseReadingController],
      providers: [CourseReadingService],
    }).compile();

    controller = module.get<CourseReadingController>(CourseReadingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
