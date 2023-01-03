import { Controller } from '@nestjs/common';
import { CourseEvaluationProgressResponseService } from './course-evaluation-progress-response.service';

@Controller('course-evaluation-progress-response')
export class CourseEvaluationProgressResponseController {
  constructor(private readonly courseEvaluationProgressResponseService: CourseEvaluationProgressResponseService) {}
}
