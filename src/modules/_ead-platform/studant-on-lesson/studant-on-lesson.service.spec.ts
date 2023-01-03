import { Test, TestingModule } from '@nestjs/testing';
import { StudantOnLessonService } from './studant-on-lesson.service';

describe('StudantOnLessonService', () => {
  let service: StudantOnLessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudantOnLessonService],
    }).compile();

    service = module.get<StudantOnLessonService>(StudantOnLessonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
