/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _getNode(idx) {
    let curNode = this.head;
    for (let i = 0; i < idx; i++) {
      curNode = curNode.next;
    }
    return curNode
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node = new Node(val);
    if (this.head === null) this.head = node;
    if (this.tail === null) {
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {

    if (this.length >= 2) {
      const newLast = this._getNode(this.length - 2)
      const removedNode = newLast.next

      this.tail = newLast
      newLast.next = null;
      this.length -= 1;
      return removedNode.val

    } else if (this.length === 0) {
      throw new Error('List cannot be empty')

    } else {
      const returnVal = this.head;
      this.tail = null;
      this.head = null;
      this.length -= 1;
      return returnVal;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error('List cannot be empty')

    } else if (this.length === 1) {
      let returnVal = this.head.val;
      this.tail = null;
      this.head = null;
      this.length -= 1;
      return returnVal;

    } else {
      let returnVal = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      return returnVal;

    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= 0 && idx <= this.length) {
      let node = this._getNode(idx);
      return node.val;
    } else {
      throw new Error('Invalid index');
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= 0 && idx <= this.length) {
      let node = this._getNode(idx);
      node.val = val;
    } else {
      throw new Error('Invalid index');
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.length === 0 || idx === (this.length)) {
      this.push(val);
    } else if (idx === 0) {
      this.unshift(val)
    } else if (idx > 0 && idx < (this.length)) {
      let newNode = new Node(val);
      let firstNode = this._getNode(idx - 1);
      let secondNode = firstNode.next;
      firstNode.next = newNode;
      newNode.next = secondNode;
      this.length += 1;

    } else {
      throw new Error('Invalid index');
    }
  }



  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === (this.length - 1)) {
      this.pop();

    } else if (idx === 0) {
      this.shift();
    } else if (length === 0) {
      throw new Error('List cannot be empty');
    } else if (idx < 0 || idx > this.length - 1) {
      throw new Error('Ivalid Index');
    } else {
      let prevNode = this._getNode(idx - 1);
      let removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      return removedNode;
    }
  }



  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    if (this.length === 0) {
      return sum;
    }
    for (let i = 0; i < this.length; i++) {
      const val = this.getAt(i);
      sum += val;
    }
    return sum / this.length;

  }
}

module.exports = LinkedList;
