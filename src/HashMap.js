import Node from "./Node";
import LinkedList from "./LinkedList";
export default class HashMap {
  constructor() {
    this.array = [];
    this.loadFactor = 0.75;
    this.capacity = 2;
  }
  hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  };
  set = (key, value) => {
    const hashed = this.hash(key);
    if (!this.array[hashed]) {
      const list = new LinkedList();
      this.array[hashed] = list;
    }
    const list = this.array[hashed];
    if (list.contains(key)) {
      console.log("Update the value");
      list.update(key, value);
    } else {
      list.append(key, value);
    }
  };
  get = (key) => {
    const hashed = this.hash(key);
    const list = this.array[hashed];
    if (list.contains(key)) {
      return list.at(list.find(key)).value;
    } else {
      return null;
    }
  };
  has = (key) => {
    const hashed = this.hash(key);
    const list = this.array[hashed];
    return list.contains(key);
  };
  remove = (key) => {};
  length = () => {};
  clear = () => {};
  keys = () => {};
  values = () => {};
  entries = () => {};
}
