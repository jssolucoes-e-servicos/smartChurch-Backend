import { Module } from '@nestjs/common';
import { CourseLibraryQuestService } from './course-library-quest.service';
import { CourseLibraryQuestController } from './course-library-quest.controller';

@Module({
  controllers: [CourseLibraryQuestController],
  providers: [CourseLibraryQuestService]
})
export class CourseLibraryQuestModule {}
