import { Module } from '@nestjs/common';
import { CourseLibraryService } from './course-library.service';
import { CourseLibraryController } from './course-library.controller';

@Module({
  controllers: [CourseLibraryController],
  providers: [CourseLibraryService]
})
export class CourseLibraryModule {}
