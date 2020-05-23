//如果很复杂的函数的结果需要缓存时,可以利用闭包存起来
function cache(func) {
  let result = {};
  return function(...arg) {
    //利用JSON.stringfy将所有参数整成一个Key,作为标识
    let args = JSON.stringify(arguments);
    //如果闭包中的result没有这个key的话,就添加此key,然后调用func,将key value对应起来
    if (!result.hasOwnProperty(args)) {
      result[args] = func.apply(null, arg);
    }
    return result[args];
  };
}

//假定这是一个结果需要缓存的复杂函数
function cpm(arg1, arg2) {
  return arg1 + arg2;
}

//调用缓存函数
let call = cache(cpm);

//调用缓存函数返回的函数,传入的参数为复杂函数的参数
console.log(call("1", "2"));