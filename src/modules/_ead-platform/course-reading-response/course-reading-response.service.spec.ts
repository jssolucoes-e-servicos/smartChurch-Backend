import { Test, TestingModule } from '@nestjs/testing';
import { CourseReadingResponseService } from './course-reading-response.service';

describe('CourseReadingResponseService', () => {
  let service: CourseReadingResponseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseReadingResponseService],
    }).compile();

    service = module.get<CourseReadingResponseService>(CourseReadingResponseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
