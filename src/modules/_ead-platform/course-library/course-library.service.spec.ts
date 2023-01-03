import { Test, TestingModule } from '@nestjs/testing';
import { CourseLibraryService } from './course-library.service';

describe('CourseLibraryService', () => {
  let service: CourseLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseLibraryService],
    }).compile();

    service = module.get<CourseLibraryService>(CourseLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
