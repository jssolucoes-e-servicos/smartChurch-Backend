import { Test, TestingModule } from '@nestjs/testing';
import { CourseEvaluationQuestController } from './course-evaluation-quest.controller';
import { CourseEvaluationQuestService } from './course-evaluation-quest.service';

describe('CourseEvaluationQuestController', () => {
  let controller: CourseEvaluationQuestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseEvaluationQuestController],
      providers: [CourseEvaluationQuestService],
    }).compile();

    controller = module.get<CourseEvaluationQuestController>(CourseEvaluationQuestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
