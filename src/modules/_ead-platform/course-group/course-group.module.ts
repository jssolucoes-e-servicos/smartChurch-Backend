import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { CourseGroupController } from './course-group.controller';
import { CourseGroupService } from './course-group.service';

@Module({
  controllers: [CourseGroupController],
  providers: [CourseGroupService, PrismaService],
  exports: [CourseGroupModule]
})
export class CourseGroupModule {}
