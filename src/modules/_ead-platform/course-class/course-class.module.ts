import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { CourseModule } from 'src/modules/_ead-platform/course/course.module';
import { CourseClassController } from './course-class.controller';
import { CourseClassService } from './course-class.service';

@Module({
  controllers: [CourseClassController],
  providers: [CourseClassService, PrismaService],
  exports: [CourseClassService],
  imports: [CourseModule],
})
export class CourseClassModule {}
