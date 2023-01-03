import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService, PrismaService],
  exports: [CourseService]
})
export class CourseModule {}
