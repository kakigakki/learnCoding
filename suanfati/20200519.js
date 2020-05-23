/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values: */

function rgb(r, g, b) {
  return [...arguments].map(item => item >= 255 ? "FF" : item <= 0 ? "00" : item.toString(16).padStart(2, 0)).join("").toUpperCase()
}
/* 将参数提取出来 */
console.log(rgb(0, 0, 256));