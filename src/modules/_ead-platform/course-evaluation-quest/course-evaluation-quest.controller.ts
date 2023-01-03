import { Controller } from '@nestjs/common';
import { CourseEvaluationQuestService } from './course-evaluation-quest.service';

@Controller('course-evaluation-quest')
export class CourseEvaluationQuestController {
  constructor(private readonly courseEvaluationQuestService: CourseEvaluationQuestService) {}
}
