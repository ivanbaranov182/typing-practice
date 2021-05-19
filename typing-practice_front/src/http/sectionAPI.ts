import { Section } from 'src/types/section';
import { host } from './index';

export const sectionApi = {
  getSections: async (): Promise<Section[]> => host.get('/section'),
  getSection: async (id: string): Promise<Section[]> =>
    host.get(`/section/${id}`)
};
