import { Module } from '@nestjs/common';
import { StudantOnLessonService } from './studant-on-lesson.service';
import { StudantOnLessonController } from './studant-on-lesson.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [StudantOnLessonController],
  providers: [StudantOnLessonService, PrismaService],
})
export class StudantOnLessonModule {}
