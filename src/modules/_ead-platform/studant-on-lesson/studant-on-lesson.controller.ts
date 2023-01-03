import { Controller } from '@nestjs/common';
import { StudantOnLessonService } from './studant-on-lesson.service';

@Controller('studant-on-lesson')
export class StudantOnLessonController {
  constructor(private readonly studantOnLessonService: StudantOnLessonService) {}
}
