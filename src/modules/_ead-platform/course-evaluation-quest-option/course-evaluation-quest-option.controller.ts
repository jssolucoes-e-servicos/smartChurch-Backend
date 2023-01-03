import { Controller } from '@nestjs/common';
import { CourseEvaluationQuestOptionService } from './course-evaluation-quest-option.service';

@Controller('course-evaluation-quest-option')
export class CourseEvaluationQuestOptionController {
  constructor(private readonly courseEvaluationQuestOptionService: CourseEvaluationQuestOptionService) {}
}
