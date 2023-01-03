import { Controller } from '@nestjs/common';
import { CourseReadingService } from './course-reading.service';

@Controller('course-reading')
export class CourseReadingController {
  constructor(private readonly courseReadingService: CourseReadingService) {}
}
