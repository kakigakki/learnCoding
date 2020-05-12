function Queue() {
  this.arr = []
  Queue.prototype.enqueue = function(item) {
    this.arr.push(item)
  }
  Queue.prototype.dequeue = function() {
    return this.arr.shift()
  }
  Queue.prototype.front = function() {
    return this.arr[0]
  }
  Queue.prototype.isEmpty = function() {
    return !this.arr.length
  }
  Queue.prototype.size = function() {
    return this.arr.length
  }
  Queue.prototype.toString = function() {
    var str = ""
    for (let i = 0; i < this.arr.length; i++) {
      str += this.arr[i] + " "
    }
    return str
  }
}
//击鼓传花算法题,用队列实现
function jiguchuanhua(array, num) {
  var queue = new Queue()
  for (let i = 0; i < array.length; i++) {
    queue.arr[i] = array[i]
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  return array.indexOf(queue.front())
}

console.log(jiguchuanhua([1, 2, 4, 5, 6], 3));