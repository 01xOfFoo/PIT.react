import { EventEmitter } from 'events';
import Logger           from '../utils/Logger';

export default class BaseStore extends EventEmitter {

  constructor(...args) {
    super(...args);
    this.data = new Set([]);

    Logger.log('BaseStore.constructor()', args);
  }

  setAll(items) {
    Logger.log('BaseStore.setAll()', items);
    this.data = new Set(items);
    this.emitChange();
  }

  getAll() {
    Logger.log('BaseStore.getAll()', this.data);
    return Array.from(this.data);
  }

  add(item) {
    Logger.log('BaseStore.add()', item);
    this.data.add(item);
    this.emitChange();
  }

  update(item) {
    Logger.log('BaseStore.update()', item);
    if (this.data.has(item))
    {
      this.data[item.id] = item;
      this.emitChange();
    }
  }

  remove(item) {
    Logger.log('BaseStore.remove()', item);
    this.data.delete(item);
    this.emitChange();
  }
}
