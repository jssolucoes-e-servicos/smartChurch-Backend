import { Module } from '@nestjs/common';
import { CourseEvaluationService } from './course-evaluation.service';
import { CourseEvaluationController } from './course-evaluation.controller';

@Module({
  controllers: [CourseEvaluationController],
  providers: [CourseEvaluationService]
})
export class CourseEvaluationModule {}
