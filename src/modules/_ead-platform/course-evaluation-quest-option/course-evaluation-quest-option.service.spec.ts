import { Test, TestingModule } from '@nestjs/testing';
import { CourseEvaluationQuestOptionService } from './course-evaluation-quest-option.service';

describe('CourseEvaluationQuestOptionService', () => {
  let service: CourseEvaluationQuestOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseEvaluationQuestOptionService],
    }).compile();

    service = module.get<CourseEvaluationQuestOptionService>(CourseEvaluationQuestOptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
