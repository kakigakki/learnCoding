/* 自己实现一个简单的防抖函数 */

function debounce(func, delay) {
  let timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    let context = this; //保证this指向调用debouce所返回的函数的对象
    timer = setTimeout(() => {
      func.apply(context, arguments);
    }, delay);
  };
}