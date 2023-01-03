import { Test, TestingModule } from '@nestjs/testing';
import { CourseLibraryController } from './course-library.controller';
import { CourseLibraryService } from './course-library.service';

describe('CourseLibraryController', () => {
  let controller: CourseLibraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseLibraryController],
      providers: [CourseLibraryService],
    }).compile();

    controller = module.get<CourseLibraryController>(CourseLibraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
