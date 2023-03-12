export type StudantOnLessonDTO = {
  id?: string;
  studantId: string;
  courseLessonId: string;
  studantOnClassId: string;
  presence?: boolean;
  eadTime?: string;
  eadStatus?: string;
  eadViewDate?: string | Date;
  active: boolean;
};
