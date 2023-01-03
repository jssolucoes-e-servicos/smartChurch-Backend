import { Test, TestingModule } from '@nestjs/testing';
import { CourseEvaluationProgressController } from './course-evaluation-progress.controller';
import { CourseEvaluationProgressService } from './course-evaluation-progress.service';

describe('CourseEvaluationProgressController', () => {
  let controller: CourseEvaluationProgressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseEvaluationProgressController],
      providers: [CourseEvaluationProgressService],
    }).compile();

    controller = module.get<CourseEvaluationProgressController>(CourseEvaluationProgressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
