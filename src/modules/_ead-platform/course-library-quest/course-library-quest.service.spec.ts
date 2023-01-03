import { Test, TestingModule } from '@nestjs/testing';
import { CourseLibraryQuestService } from './course-library-quest.service';

describe('CourseLibraryQuestService', () => {
  let service: CourseLibraryQuestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseLibraryQuestService],
    }).compile();

    service = module.get<CourseLibraryQuestService>(CourseLibraryQuestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
