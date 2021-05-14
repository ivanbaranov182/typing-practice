import { Lesson } from './lesson';

export interface Section {
  id: number;
  name: string;
  text: string;
  img?: string;
}

export interface SectionDetail extends Selection {
  lessons: Lesson[];
}
