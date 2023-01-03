import { Test, TestingModule } from '@nestjs/testing';
import { CourseLibraryQuestController } from './course-library-quest.controller';
import { CourseLibraryQuestService } from './course-library-quest.service';

describe('CourseLibraryQuestController', () => {
  let controller: CourseLibraryQuestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseLibraryQuestController],
      providers: [CourseLibraryQuestService],
    }).compile();

    controller = module.get<CourseLibraryQuestController>(CourseLibraryQuestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
