import { Entity } from '.';

export interface Lesson extends Entity {
  name: string;
  text: string;
  sectionId: number;
  rating: number;
}
