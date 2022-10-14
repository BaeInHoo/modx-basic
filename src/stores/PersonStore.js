import { observable, makeObservable, action } from "mobx";

export default class PersonStore {
  @observable
  name = "Mark";

  @observable
  age = 39;

  get age10() {
    return Math.floor(this.age / 10) * 10;
  }

  constructor(rootStore) {
    makeObservable(this);

    this.rootStore = rootStore;
  }

  @action
  plus() {
    this.age++;
    this.rootStore.todoStore.todos = [];
  }

  @action
  testAction() {
    this.age = 45;
    this.name = "WoongJae";
  }
}
