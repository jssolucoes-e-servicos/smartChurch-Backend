import { Module } from '@nestjs/common';
import { CourseEvaluationProgressService } from './course-evaluation-progress.service';
import { CourseEvaluationProgressController } from './course-evaluation-progress.controller';

@Module({
  controllers: [CourseEvaluationProgressController],
  providers: [CourseEvaluationProgressService]
})
export class CourseEvaluationProgressModule {}
