export class Todo {
  _description;
  _created;
  _isDone;
  _id;

  static fromJson({ _description, _id, _created, _isDone }) {
    return new Todo(_description, _id, _created, _isDone);
  }

  constructor(description, id, created, is_Done) {
    this.id = id || new Date().getTime().toString();
    this.description = description;
    this.created = created || new Date();
    this._isDone = is_Done || false;
  }
  get description() {
    return this._description;
  }
  get cretated() {
    return this._created;
  }
  get isDone() {
    return this._isDone;
  }
  get id() {
    return this._id;
  }

  set id(state) {
    this._id = state;
  }
  set isDone(state) {
    this._isDone = state;
  }

  set created(state) {
    this._created = state;
  }
  set description(state) {
    this._description = state;
  }
}
