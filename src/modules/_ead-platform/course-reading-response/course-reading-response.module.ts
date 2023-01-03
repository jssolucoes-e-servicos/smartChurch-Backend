import { Module } from '@nestjs/common';
import { CourseReadingResponseService } from './course-reading-response.service';
import { CourseReadingResponseController } from './course-reading-response.controller';

@Module({
  controllers: [CourseReadingResponseController],
  providers: [CourseReadingResponseService]
})
export class CourseReadingResponseModule {}
