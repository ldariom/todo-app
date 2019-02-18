export class Todo {
  id: number;
  title: string;
  state: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
