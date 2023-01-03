import { Test, TestingModule } from '@nestjs/testing';
import { CourseEvaluationProgressService } from './course-evaluation-progress.service';

describe('CourseEvaluationProgressService', () => {
  let service: CourseEvaluationProgressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseEvaluationProgressService],
    }).compile();

    service = module.get<CourseEvaluationProgressService>(CourseEvaluationProgressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
