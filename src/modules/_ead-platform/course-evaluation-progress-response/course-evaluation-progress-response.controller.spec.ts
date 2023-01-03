import { Test, TestingModule } from '@nestjs/testing';
import { CourseEvaluationProgressResponseController } from './course-evaluation-progress-response.controller';
import { CourseEvaluationProgressResponseService } from './course-evaluation-progress-response.service';

describe('CourseEvaluationProgressResponseController', () => {
  let controller: CourseEvaluationProgressResponseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseEvaluationProgressResponseController],
      providers: [CourseEvaluationProgressResponseService],
    }).compile();

    controller = module.get<CourseEvaluationProgressResponseController>(CourseEvaluationProgressResponseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
