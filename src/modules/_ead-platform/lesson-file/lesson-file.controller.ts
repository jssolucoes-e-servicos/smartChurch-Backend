import { Controller } from '@nestjs/common';
import { LessonFileService } from './lesson-file.service';

@Controller('lesson-file')
export class LessonFileController {
  constructor(private readonly lessonFileService: LessonFileService) {}
}
