import { Controller } from '@nestjs/common';
import { CourseEvaluationProgressService } from './course-evaluation-progress.service';

@Controller('course-evaluation-progress')
export class CourseEvaluationProgressController {
  constructor(private readonly courseEvaluationProgressService: CourseEvaluationProgressService) {}
}
