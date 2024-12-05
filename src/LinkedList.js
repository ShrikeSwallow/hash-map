import Node from "./Node";
export default class LinkedList {
  constructor() {
    this.headNode = new Node();
    this.tailNode = this.headNode;
    this.listSize = 0;
  }
  append = (value) => {
    if (this.listSize === 0) {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    } else {
      this.tailNode.nextNode = new Node(value);
      this.tailNode = this.tailNode.nextNode;
    }
    this.listSize += 1;
  };
  prepend = (value) => {
    if (this.listSize === 0) {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    } else {
      const temp = new Node(value);
      temp.nextNode = this.headNode;
      this.headNode = temp;
    }
    this.listSize += 1;
  };
  size = () => {
    return this.listSize;
  };
  head = () => {
    return this.headNode.value ?? "The list is empty";
  };
  tail = () => {
    return this.tailNode.value ?? "The list is empty";
  };
  at = (index) => {
    if (index >= 0 && index < this.listSize) {
      let temp = this.headNode;
      let currentIndex = 0;

      while (currentIndex < this.listSize) {
        if (currentIndex === index) {
          return temp.value;
        } else {
          temp = temp.nextNode;
          currentIndex += 1;
        }
      }
    } else {
      return `Index ${index} doesn't exist in this list!`;
    }
  };
  pop = () => {
    let temp = this.headNode;
    let counter = 0;
    let limit = this.listSize - 1;
    if (limit === 0) {
      this.headNode.value = null;
      this.tailNode.value = null;
      this.listSize = 0;
      return;
    }
    while (counter < limit) {
      if (counter === limit - 1) {
        temp.nextNode = null;
        this.tailNode = temp;
        this.listSize -= 1;
        break;
      } else {
        temp = temp.nextNode;
        counter += 1;
      }
    }
  };
  contains = (value) => {
    let temp = this.headNode;
    while (temp.nextNode !== null) {
      if (temp.value === value) {
        return true;
      } else {
        temp = temp.nextNode;
      }
    }
    return false;
  };
  find = (value) => {
    let temp = this.headNode;
    let counter = 0;
    while (temp.nextNode !== null) {
      if (temp.value === value) {
        return counter;
      } else {
        temp = temp.nextNode;
        counter += 1;
      }
    }
    return null;
  };
  toString = () => {
    let temp = this.headNode;
    let string = "";

    if (temp.value === null) {
      string = "null";
      return string;
    }
    while (temp !== null) {
      string += "( " + temp.value + " ) -> ";
      temp = temp.nextNode;
    }
    return `${string} null`;
  };

  // extra credit methods
  insertAt = (value, index) => {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.listSize) {
      this.append(value);
      return;
    }
    let temp = this.headNode;
    let currentIndex = 0;
    while (currentIndex < this.listSize) {
      if (currentIndex === index - 1) {
        const newNode = new Node(value);
        newNode.nextNode = temp.nextNode;
        temp.nextNode = newNode;
        this.listSize += 1;
        return;
      } else {
        temp = temp.nextNode;
        currentIndex += 1;
      }
    }
    console.log("The index is bigger than the list size");
  };
  removeAt = (index) => {
    if (index === this.listSize - 1) {
      this.pop();
      return;
    }
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      this.listSize -= 1;
      return;
    }
    let temp = this.headNode;
    let currentIndex = 0;
    while (currentIndex < this.listSize) {
      if (currentIndex === index - 1) {
        temp.nextNode = temp.nextNode.nextNode;
        this.listSize -= 1;
        return;
      } else {
        temp = temp.nextNode;
        currentIndex += 1;
      }
    }
    console.log("The index does not exist in this list");
  };
}
