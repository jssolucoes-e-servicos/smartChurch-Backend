import { Test, TestingModule } from '@nestjs/testing';
import { CourseEvaluationController } from './course-evaluation.controller';
import { CourseEvaluationService } from './course-evaluation.service';

describe('CourseEvaluationController', () => {
  let controller: CourseEvaluationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseEvaluationController],
      providers: [CourseEvaluationService],
    }).compile();

    controller = module.get<CourseEvaluationController>(CourseEvaluationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
