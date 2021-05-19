import { Entity } from '.';
import { Lesson } from './lesson';

export interface Section extends Entity {
  name: string;
  text: string;
  img: string;
  lessons?: Lesson[];
}
