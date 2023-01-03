import { Controller } from '@nestjs/common';
import { CourseClassService } from './course-class.service';

@Controller('course-class')
export class CourseClassController {
  constructor(private readonly courseClassService: CourseClassService) {}
}
