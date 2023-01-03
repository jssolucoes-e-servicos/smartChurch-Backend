import { Controller } from '@nestjs/common';
import { CourseEvaluationService } from './course-evaluation.service';

@Controller('course-evaluation')
export class CourseEvaluationController {
  constructor(private readonly courseEvaluationService: CourseEvaluationService) {}
}
