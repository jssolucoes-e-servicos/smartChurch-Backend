import { Module } from '@nestjs/common';
import { CourseEvaluationQuestService } from './course-evaluation-quest.service';
import { CourseEvaluationQuestController } from './course-evaluation-quest.controller';

@Module({
  controllers: [CourseEvaluationQuestController],
  providers: [CourseEvaluationQuestService]
})
export class CourseEvaluationQuestModule {}
