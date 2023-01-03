import { Module } from '@nestjs/common';
import { CourseLibraryQuestOptionService } from './course-library-quest-option.service';
import { CourseLibraryQuestOptionController } from './course-library-quest-option.controller';

@Module({
  controllers: [CourseLibraryQuestOptionController],
  providers: [CourseLibraryQuestOptionService]
})
export class CourseLibraryQuestOptionModule {}
