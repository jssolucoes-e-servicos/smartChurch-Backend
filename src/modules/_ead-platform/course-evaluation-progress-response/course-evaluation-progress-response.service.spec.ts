import { Test, TestingModule } from '@nestjs/testing';
import { CourseEvaluationProgressResponseService } from './course-evaluation-progress-response.service';

describe('CourseEvaluationProgressResponseService', () => {
  let service: CourseEvaluationProgressResponseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseEvaluationProgressResponseService],
    }).compile();

    service = module.get<CourseEvaluationProgressResponseService>(CourseEvaluationProgressResponseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
