import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { CourseClassController } from './course-class.controller';
import { CourseClassService } from './course-class.service';

@Module({
  controllers: [CourseClassController],
  providers: [CourseClassService, PrismaService],
  exports: [CourseClassService]
})
export class CourseClassModule {}
