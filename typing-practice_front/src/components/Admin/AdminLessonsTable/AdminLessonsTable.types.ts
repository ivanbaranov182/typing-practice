import { Entity } from 'src/types';

export interface LessonsRowsData extends Entity {
  name: string;
  text: string;
  rating: number;
  sectionId: number;
}
