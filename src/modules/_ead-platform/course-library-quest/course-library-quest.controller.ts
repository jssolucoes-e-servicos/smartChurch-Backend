import { Controller } from '@nestjs/common';
import { CourseLibraryQuestService } from './course-library-quest.service';

@Controller('course-library-quest')
export class CourseLibraryQuestController {
  constructor(private readonly courseLibraryQuestService: CourseLibraryQuestService) {}
}
