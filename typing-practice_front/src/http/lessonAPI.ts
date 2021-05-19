import { Lesson } from 'src/types/lesson';
import { host } from './index';

export const lessonApi = {
  getLessons: async (): Promise<Lesson[]> => host.get('/lesson'),
  getLesson: async (id: string): Promise<Lesson[]> => host.get(`/lesson/${id}`)
};
