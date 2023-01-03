import { Module } from '@nestjs/common';
import { StudantOnLessonService } from './studant-on-lesson.service';
import { StudantOnLessonController } from './studant-on-lesson.controller';

@Module({
  controllers: [StudantOnLessonController],
  providers: [StudantOnLessonService]
})
export class StudantOnLessonModule {}
