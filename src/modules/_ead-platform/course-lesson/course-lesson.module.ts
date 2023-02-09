import { Module } from '@nestjs/common';
import { CourseLessonService } from './course-lesson.service';
import { CourseLessonController } from './course-lesson.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [CourseLessonController],
  providers: [CourseLessonService, PrismaService],
})
export class CourseLessonModule {}
