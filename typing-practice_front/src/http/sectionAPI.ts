import { Section } from 'src/types/section';
import { authHost, host } from './index';

export const sectionApi = {
  getSections: async (): Promise<Section[]> => host.get('/section'),
  getSection: async (id: string): Promise<Section[]> =>
    host.get(`/section/${id}`),
  createSection: async (sectionData: any): Promise<any> =>
    authHost({ method: 'post', url: '/section', data: sectionData }),
  editSection: async (sectionData: any): Promise<any> =>
    authHost({ method: 'put', url: '/section', data: sectionData }),
  deleteSection: async (id: string): Promise<any> =>
    authHost({ method: 'delete', url: `/section/${id}` })
};
