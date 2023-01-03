import { Module } from '@nestjs/common';
import { CourseLessonService } from './course-lesson.service';
import { CourseLessonController } from './course-lesson.controller';

@Module({
  controllers: [CourseLessonController],
  providers: [CourseLessonService]
})
export class CourseLessonModule {}
