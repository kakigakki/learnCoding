function LinkList() {
  function Node(data) {
    this.data = data
    this.next = null
  }
  this.length = 0
  this.head = null
  LinkList.prototype.append = function(data) {
    //创建新的节点  
    var node = new Node(data)

    //插入节点
    //判断插入的节点是否是第一个
    if (this.length === 0) {
      this.head = node
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }

    //数组长度加1
    this.length++
  }

  LinkList.prototype.toString = function() {
    var current = this.head
    var str = ""
    if (this.length === 0) {
      return null
    } else {
      while (current) {
        str += current.data + " "
        current = current.next
      }
      return str
    }
  }

  LinkList.prototype.get = function(position) {
    //判断position是否越界
    if (position > this.length - 1 || position < 0) {
      return false
    }
    var index = 0
    var current = this.head
    while (current) {
      if (index == position) {
        return current.data
      }
      current = current.next
      index++
    }

  }

  LinkList.prototype.insert = function(position, data) {
    //判断position是否越界
    if (position > this.length - 1 || position < 0) {
      return false
    }
    var index = 1
    var current = this.head
    var previous = null
      //创建新的节点
    var node = new Node(data)
      //判断插入的是否是第一个
    if (position == 0) {
      //将原先的第一个节点赋值给新节点的next
      node.next = this.head
        //将新节点作为头部
      this.head = node
    } else {
      while (current.next) {
        previous = current
        current = current.next
        if (index == position) {
          previous.next = node
          node.next = current
          break
        }
        index++
      }

    }
    //链表长度+1
    this.length++
      return true
  }
  LinkList.prototype.indexOf = function(data) {

    var index = 0
    var current = this.head
    while (current) {
      if (current.data == data) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  LinkList.prototype.update = function(position, data) {
    //判断position是否越界
    if (position > this.length - 1 || position < 0) {
      return false
    }
    var index = 0
    var current = this.head
    while (current) {
      if (index == position) {
        current.data = data
      }
      current = current.next
      index++
    }
  }
  LinkList.prototype.removeAt = function(position) {
    //判断position是否越界
    if (position > this.length - 1 || position < 0) {
      return false
    }
    var index = 0
    var current = this.head
    var previous = null
    if (position == 0) {
      this.head = this.head.next
    } else {
      while (current) {
        if (index == position) {
          current = current.next
          previous.next = current
          break
        } else {
          previous = current
          current = current.next
          index++
        }
      }
    }
    this.length--
      return true
  }
  LinkList.prototype.remove = function(data) {
    var index = this.indexOf(data)
    return this.removeAt(index)
  }
  LinkList.prototype.isEmpty = function() {
    return this.length ? false : true
  }
  LinkList.prototype.size = function() {
    return this.length
  }
}

var link = new LinkList()
link.append("abc")
link.append("kaki")
link.append("miki")
console.log("测试append():---------", link.toString());
console.log("测试get()-------------", link.get(1));
console.log("测试insert()----------", link.insert(1, "mikina"));
console.log("当前数据()------------", link.toString());
console.log("当前长度()------------", link.length);
console.log("测试index0f()---------", link.indexOf("miki"));
console.log("当前数据()------------", link.toString());
console.log("测试removeAt()--------", link.removeAt(2));
console.log("当前数据()------------", link.toString());
console.log("测试remove()----------", link.remove("ddg"));
console.log("测试remove()----------", link.remove("abc"));
console.log("当前数据()------------", link.toString());
console.log("当前长度()------------", link.size());