import { Test, TestingModule } from '@nestjs/testing';
import { CourseEvaluationService } from './course-evaluation.service';

describe('CourseEvaluationService', () => {
  let service: CourseEvaluationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseEvaluationService],
    }).compile();

    service = module.get<CourseEvaluationService>(CourseEvaluationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
