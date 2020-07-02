function DoublyLinkList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  DoublyLinkList.prototype.append = function(data) {
    let newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  DoublyLinkList.prototype.insert = function(pos, data) {
    if (pos < 0 || pos > this.length) return false;
    let newNode = new Node(data);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (pos == 0) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      } else if (pos == this.length) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let index = 0;
        let cur = this.head;
        while (index++ < pos) {
          cur = cur.next;
        }
        newNode.prev = cur.prev;
        newNode.prev.next = newNode;
        newNode.next = cur;
        cur.prev = newNode;
      }
    }
    this.length++;
  };

  DoublyLinkList.prototype.get = function(pos) {
    if (pos < 0 || pos >= this.length) return -1;
    let cur;
    let index;
    if (this.length / 2 <= pos) {
      index = 0;
      cur = this.head;
      while (index++ < pos) {
        cur = cur.next;
      }
    } else {
      index = this.length - 1;
      cur = this.tail;
      while (index-- > pos) {
        cur = cur.prev;
      }
    }
    return cur.data;
  };

  DoublyLinkList.prototype.indexOf = function(ele) {
    let cur = this.head;
    let index = 0;
    while (cur) {
      if (cur.data == ele) {
        return index;
      }
      index++;
      cur = cur.next;
    }
    return -1;
  };

  DoublyLinkList.prototype.update = function(pos, ele) {
    if (pos < 0 || pos >= this.length) return -1;
    let cur;
    let index;
    if (this.length / 2 <= pos) {
      index = 0;
      cur = this.head;
      while (index++ < pos) {
        cur = cur.next;
      }
    } else {
      index = this.length - 1;
      cur = this.tail;
      while (index-- > pos) {
        cur = cur.prev;
      }
    }
    cur.data = ele;
    return 1;
  };

  DoublyLinkList.prototype.removeAt = function(pos) {
    if (pos < 0 || pos >= this.length) return -1;
    let cur;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else if (pos === 0) {
      cur = this.head;
      this.head = cur.next;
      cur.next.prev = null;
    } else if (pos === this.length - 1) {
      cur = this.tail;
      this.tail = cur.prev;
      cur.prev.next = null;
    } else {
      let index;
      if (this.length / 2 <= pos) {
        index = 0;
        cur = this.head;
        while (index++ < pos) {
          cur = cur.next;
        }
      } else {
        index = this.length - 1;
        cur = this.tail;
        while (index-- > pos) {
          cur = cur.prev;
        }
      }
      cur.prev.next = cur.next;
      cur.next.prev = cur.prev;
      cur = null;
    }
    this.length--;
    return 1;
  };

  DoublyLinkList.prototype.remove = function(ele) {
    let index = DoublyLinkList.prototype.indexOf(ele);
    if (index >= 0) return DoublyLinkList.prototype.removeAt(index);
  };

  DoublyLinkList.prototype.isEmpty = function() {
    return !this.length;
  };

  DoublyLinkList.prototype.size = function() {
    return this.length;
  };

  DoublyLinkList.prototype.toString = function() {
    return this.backwardString();
  };

  DoublyLinkList.prototype.forwardString = function() {
    let cur = this.tail;
    let string = "";
    while (cur) {
      string += cur.data + " > ";
      cur = cur.prev;
    }
    return string + "null";
  };

  DoublyLinkList.prototype.backwardString = function() {
    let cur = this.head;
    let string = "";
    while (cur) {
      string += cur.data + " > ";
      cur = cur.next;
    }
    return string + "null";
  };
}

let doublyLinkList = new DoublyLinkList();

doublyLinkList.append("aaa");
doublyLinkList.append("bbb");
doublyLinkList.insert(1, "ccc");
doublyLinkList.insert(1, "ddd");
doublyLinkList.remove("ddd2");
console.log(doublyLinkList.backwardString());
console.log(doublyLinkList.indexOf("bbb"));
console.log(doublyLinkList.size());
console.log(doublyLinkList.isEmpty());