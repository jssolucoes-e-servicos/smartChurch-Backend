import { Module } from '@nestjs/common';
import { CourseReadingService } from './course-reading.service';
import { CourseReadingController } from './course-reading.controller';

@Module({
  controllers: [CourseReadingController],
  providers: [CourseReadingService]
})
export class CourseReadingModule {}
