import { Module } from '@nestjs/common';
import { CourseEvaluationQuestOptionService } from './course-evaluation-quest-option.service';
import { CourseEvaluationQuestOptionController } from './course-evaluation-quest-option.controller';

@Module({
  controllers: [CourseEvaluationQuestOptionController],
  providers: [CourseEvaluationQuestOptionService]
})
export class CourseEvaluationQuestOptionModule {}
