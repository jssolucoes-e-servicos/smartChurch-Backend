import { Test, TestingModule } from '@nestjs/testing';
import { CourseEvaluationQuestService } from './course-evaluation-quest.service';

describe('CourseEvaluationQuestService', () => {
  let service: CourseEvaluationQuestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseEvaluationQuestService],
    }).compile();

    service = module.get<CourseEvaluationQuestService>(CourseEvaluationQuestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
