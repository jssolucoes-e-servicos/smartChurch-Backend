import { Test, TestingModule } from '@nestjs/testing';
import { CourseLibraryQuestOptionService } from './course-library-quest-option.service';

describe('CourseLibraryQuestOptionService', () => {
  let service: CourseLibraryQuestOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseLibraryQuestOptionService],
    }).compile();

    service = module.get<CourseLibraryQuestOptionService>(CourseLibraryQuestOptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
