import { Module } from '@nestjs/common';
// Modules for secirity
import { AuthRecoveryModule } from './modules/_security/auth-recovery/auth-recovery.module';
import { AuthSessionModule } from './modules/_security/auth-session/auth-session.module';
import { AuthTfaModule } from './modules/_security/auth-tfa/auth-tfa.module';
import { AuthModule } from './modules/_security/auth/auth.module';
// Modules commons
import { FamilyLevelsModule } from './modules/_commons/family-levels/family-levels.module';
// Modules basics
import { ChurchModule } from './modules/church/church.module';
// modules for Persons
import { PersonAdressModule } from './modules/_persons/person-adress/person-adress.module';
import { PersonDocumentModule } from './modules/_persons/person-document/person-document.module';
import { PersonFamilyModule } from './modules/_persons/person-family/person-family.module';
import { PersonModule } from './modules/_persons/person/person.module';
// Mudules Persons with Vicules
import { PersonOnCellModule } from './modules/_persons/person-on-cell/person-on-cell.module';
import { PersonOnChurchModule } from './modules/_persons/person-on-church/person-on-church.module';
import { PersonOnDepartamentModule } from './modules/_persons/person-on-departament/person-on-departament.module';
import { PersonOnEventModule } from './modules/_persons/person-on-event/person-on-event.module';
import { PersonPhoneModule } from './modules/_persons/person-phone/person-phone.module';
// Mudules for Cells Manager
import { CellModule } from './modules/cell/cell.module';
import { CellsNetworkModule } from './modules/cells-network/cells-network.module';
// Modules on Apllications of EAD - Platform
import { CourseClassModule } from './modules/_ead-platform/course-class/course-class.module';
import { CourseEvaluationProgressResponseModule } from './modules/_ead-platform/course-evaluation-progress-response/course-evaluation-progress-response.module';
import { CourseEvaluationProgressModule } from './modules/_ead-platform/course-evaluation-progress/course-evaluation-progress.module';
import { CourseEvaluationQuestOptionModule } from './modules/_ead-platform/course-evaluation-quest-option/course-evaluation-quest-option.module';
import { CourseEvaluationQuestModule } from './modules/_ead-platform/course-evaluation-quest/course-evaluation-quest.module';
import { CourseEvaluationModule } from './modules/_ead-platform/course-evaluation/course-evaluation.module';
import { CourseGroupModule } from './modules/_ead-platform/course-group/course-group.module';
import { CourseLessonModule } from './modules/_ead-platform/course-lesson/course-lesson.module';
import { CourseLibraryQuestOptionModule } from './modules/_ead-platform/course-library-quest-option/course-library-quest-option.module';
import { CourseLibraryQuestModule } from './modules/_ead-platform/course-library-quest/course-library-quest.module';
import { CourseLibraryModule } from './modules/_ead-platform/course-library/course-library.module';
import { CourseReadingResponseModule } from './modules/_ead-platform/course-reading-response/course-reading-response.module';
import { CourseReadingModule } from './modules/_ead-platform/course-reading/course-reading.module';
import { CourseModule } from './modules/_ead-platform/course/course.module';
import { LessonFileModule } from './modules/_ead-platform/lesson-file/lesson-file.module';
import { StudantOnClassModule } from './modules/_ead-platform/studant-on-class/studant-on-class.module';
import { StudantOnLessonModule } from './modules/_ead-platform/studant-on-lesson/studant-on-lesson.module';
import { TeacherModule } from './modules/_ead-platform/teacher/teacher.module';

@Module({
  imports: [
    AuthModule,
    CellModule,
    CellsNetworkModule,
    ChurchModule, 
    PersonModule, 
    CourseModule, 
    TeacherModule, 
    PersonDocumentModule, 
    PersonOnChurchModule, 
    CourseGroupModule, 
    CourseLessonModule, 
    LessonFileModule, 
    CourseClassModule, 
    StudantOnClassModule, 
    StudantOnLessonModule, 
    CourseLibraryModule, 
    CourseLibraryQuestModule, 
    CourseLibraryQuestOptionModule, 
    CourseReadingModule, 
    CourseReadingResponseModule, 
    CourseEvaluationModule, 
    CourseEvaluationQuestModule, 
    CourseEvaluationQuestOptionModule, 
    CourseEvaluationProgressModule, 
    CourseEvaluationProgressResponseModule, 
    AuthTfaModule, 
    AuthSessionModule, 
    AuthRecoveryModule, 
    PersonAdressModule, 
    PersonPhoneModule, 
    PersonFamilyModule, 
    PersonOnCellModule, 
    PersonOnDepartamentModule, 
    PersonOnEventModule,
    FamilyLevelsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
