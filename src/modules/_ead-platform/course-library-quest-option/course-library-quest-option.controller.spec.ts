import { Test, TestingModule } from '@nestjs/testing';
import { CourseLibraryQuestOptionController } from './course-library-quest-option.controller';
import { CourseLibraryQuestOptionService } from './course-library-quest-option.service';

describe('CourseLibraryQuestOptionController', () => {
  let controller: CourseLibraryQuestOptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseLibraryQuestOptionController],
      providers: [CourseLibraryQuestOptionService],
    }).compile();

    controller = module.get<CourseLibraryQuestOptionController>(CourseLibraryQuestOptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
