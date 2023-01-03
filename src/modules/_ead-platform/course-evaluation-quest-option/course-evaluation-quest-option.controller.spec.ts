import { Test, TestingModule } from '@nestjs/testing';
import { CourseEvaluationQuestOptionController } from './course-evaluation-quest-option.controller';
import { CourseEvaluationQuestOptionService } from './course-evaluation-quest-option.service';

describe('CourseEvaluationQuestOptionController', () => {
  let controller: CourseEvaluationQuestOptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseEvaluationQuestOptionController],
      providers: [CourseEvaluationQuestOptionService],
    }).compile();

    controller = module.get<CourseEvaluationQuestOptionController>(CourseEvaluationQuestOptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
