import { makeAutoObservable } from 'mobx';

export default class UIStore {
  loading: boolean;

  drawer: boolean;

  errors: string[];

  constructor() {
    this.loading = true;
    this.drawer = false;
    this.errors = [];
    makeAutoObservable(this);
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setDrawer(drawer: boolean) {
    this.drawer = drawer;
  }

  toggleDrawer() {
    this.drawer = !this.drawer;
  }

  setErrors(errors: string[]) {
    this.errors = errors;
  }

  get loadingData() {
    return this.loading;
  }

  get drawerData() {
    return this.drawer;
  }

  get errorsData() {
    return this.errors;
  }
}
