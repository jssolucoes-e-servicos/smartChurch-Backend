import { Controller } from '@nestjs/common';
import { CourseLessonService } from './course-lesson.service';

@Controller('course-lesson')
export class CourseLessonController {
  constructor(private readonly courseLessonService: CourseLessonService) {}
}
