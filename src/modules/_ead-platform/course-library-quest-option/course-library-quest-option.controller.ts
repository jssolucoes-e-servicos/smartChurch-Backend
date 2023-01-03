import { Controller } from '@nestjs/common';
import { CourseLibraryQuestOptionService } from './course-library-quest-option.service';

@Controller('course-library-quest-option')
export class CourseLibraryQuestOptionController {
  constructor(private readonly courseLibraryQuestOptionService: CourseLibraryQuestOptionService) {}
}
