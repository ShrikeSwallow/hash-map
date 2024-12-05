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
    console.log(list.contains(key));
    if (list.contains(key)) {
      console.log("Update the value");
      console.log(list.find(key));
    } else {
      list.append(key, value);
    }
  };
  get = (key) => {};
  has = (key) => {};
  remove = (key) => {};
  length = () => {};
  clear = () => {};
  keys = () => {};
  values = () => {};
  entries = () => {};
}
