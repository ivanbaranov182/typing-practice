import { makeAutoObservable } from 'mobx';
import { ILessonGroup } from 'src/types/lessonGroups';

export default class LessonGroupStore {
  lessonGroups: ILessonGroup[];

  constructor() {
    this.lessonGroups = [
      {
        id: 0,
        name: 'Lesson group 1',
        img:
          'http://kakpravilino.com/wp-content/uploads/2018/01/Reka-Enisej.jpg'
      },
      {
        id: 1,
        name: 'Lesson group 2',
        img:
          'https://bask-tour.ru/assets/images/cache/eb/dd/ebdd8ba2a7287ee0f181452cc10f709c.jpg'
      },
      {
        id: 2,
        name: 'Lesson group 3',
        img:
          'https://im0-tub-ru.yandex.net/i?id=dab09d4a7d380ded7c0b5ad8de57b53f-l&ref=rim&n=13&w=1080&h=681'
      }
    ];
    makeAutoObservable(this);
  }

  setLessonGroups(lessonGroups: ILessonGroup[]) {
    this.lessonGroups = lessonGroups;
  }

  get lessonGroupsData() {
    return this.lessonGroups;
  }
}
