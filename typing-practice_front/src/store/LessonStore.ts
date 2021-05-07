import { makeAutoObservable } from 'mobx';
import { ILesson } from 'src/types/lesson';

export default class LessonStore {
  lessons: ILesson[];

  constructor() {
    this.lessons = [
      {
        id: 0,
        name: 'Lesson1',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        lessonGroupId: 0,
        rating: 2
      },
      {
        id: 1,
        name: 'Lesson2',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        lessonGroupId: 0,
        rating: 1
      },
      {
        id: 2,
        name: 'Lesson1',
        text: 'Lorem ipsum dolor sit amet.',
        lessonGroupId: 1,
        rating: 4
      }
    ];
    makeAutoObservable(this);
  }

  setLessons(lessons: ILesson[]) {
    this.lessons = lessons;
  }

  get lessonsData() {
    return this.lessons;
  }
}
