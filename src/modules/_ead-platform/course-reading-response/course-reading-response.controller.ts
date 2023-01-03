import { Controller } from '@nestjs/common';
import { CourseReadingResponseService } from './course-reading-response.service';

@Controller('course-reading-response')
export class CourseReadingResponseController {
  constructor(private readonly courseReadingResponseService: CourseReadingResponseService) {}
}
