export type LessonFileDTO = {
  id?: string;
  name: string;
  format: string;
  url: string;
  courseLessonId: string;
  active?: boolean;
};

export type LessonFileUploadDTO = {
  id?: string;
  name: string;
  courseLessonId: string;
  active?: boolean;
};

export type LessonFileUpdateFileDTO = {
  id?: string;
  name: string;
  format: string;
  courseLessonId: string;
};
