import { Module } from '@nestjs/common';
import { CourseEvaluationProgressResponseService } from './course-evaluation-progress-response.service';
import { CourseEvaluationProgressResponseController } from './course-evaluation-progress-response.controller';

@Module({
  controllers: [CourseEvaluationProgressResponseController],
  providers: [CourseEvaluationProgressResponseService]
})
export class CourseEvaluationProgressResponseModule {}
