import { Module } from '@nestjs/common';
import { LessonFileService } from './lesson-file.service';
import { LessonFileController } from './lesson-file.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [LessonFileController],
  providers: [LessonFileService, PrismaService],
})
export class LessonFileModule {}
