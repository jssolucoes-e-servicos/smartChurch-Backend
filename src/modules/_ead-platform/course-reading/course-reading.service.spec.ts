import { Test, TestingModule } from '@nestjs/testing';
import { CourseReadingService } from './course-reading.service';

describe('CourseReadingService', () => {
  let service: CourseReadingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseReadingService],
    }).compile();

    service = module.get<CourseReadingService>(CourseReadingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
