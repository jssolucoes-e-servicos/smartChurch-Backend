import { Controller } from '@nestjs/common';
import { CourseLibraryService } from './course-library.service';

@Controller('course-library')
export class CourseLibraryController {
  constructor(private readonly courseLibraryService: CourseLibraryService) {}
}
