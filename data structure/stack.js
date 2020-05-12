function Stack() {

  this.arr = []
  Stack.prototype.isEmpty = function() {
    return this.arr.length === 0 ? true : false
  }
  Stack.prototype.push = function(item) {
    this.arr.push(item)
  }
  Stack.prototype.pop = function() {
    return this.arr.pop()
  }
  Stack.prototype.peek = function() {
    return this.arr[this.arr.length - 1]
  }
  Stack.prototype.size = function() {
    return this.arr.length
  }
  Stack.prototype.toString = function() {
    var str = ""
    for (let i = 0; i < this.arr.length; i++) {
      str += this.arr[i] + " ";
    }
    return str
  }
}

var stack = new Stack()

//用栈实现十进制转2进制
function toBinary(num) {
  while (num > 0) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }
  let binary = ""
  while (stack.size() > 0) {
    binary = binary + stack.pop()
  }
  return +binary
}

console.log(toBinary(1000));