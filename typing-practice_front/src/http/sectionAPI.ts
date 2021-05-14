import { Section, SectionDetail } from 'src/types/section';
import { host } from './index';

export const sectionApi = {
  getSections: async (): Promise<Section[]> => host.get('api/section'),
  getSection: async (id: string): Promise<SectionDetail[]> =>
    host.get(`api/section/${id}`)
};
