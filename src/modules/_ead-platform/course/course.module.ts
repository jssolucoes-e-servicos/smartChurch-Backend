import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { ChurchModule } from 'src/modules/church/church.module';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService, PrismaService],
  exports: [CourseService],
  imports: [ChurchModule],
})
export class CourseModule {}
