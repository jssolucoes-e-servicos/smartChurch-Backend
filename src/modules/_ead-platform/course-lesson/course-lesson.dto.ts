export type CourseLessonDTO = {
  id?: string;
  name: string;
  description: string;
  isVideo: boolean;
  videoPlatform?: string;
  type?: string;
  videoIdentify?: string;
  courseId: string;
  teacherId: string;
  active?: boolean;
};
