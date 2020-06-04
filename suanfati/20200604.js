/*  有两个字符串a,b  颠倒a中字符的大小写,颠倒次数为b中出现的字符数*/
function workOnStrings(a, b) {
  let aItems = [...a.toLowerCase()];
  let bItems = [...b.toLowerCase()];
  //相同的字符
  let occurenceItem = new Map(
    aItems
    .filter((item) => {
      return bItems.includes(item);
    })
    .map((item) => {
      return [item, 0];
    })
  );

  //获取a字符串中,出现相同字符的次数
  aItems.forEach((item) => {
    occurenceItem.set(item, occurenceItem.get(item) + 1);
  });
  //颠倒B
  let bResult = [...b]
    .map((item) =>
      occurenceItem.get(item.toLowerCase()) % 2 ?
      item.toLowerCase() == item ?
      item.toUpperCase() :
      item.toLowerCase() :
      item
    )
    .join("");
  //清空相同字符的次数
  occurenceItem.forEach((value, key) => {
    occurenceItem.set(key, 0);
  });
  //获取b字符串中,出现相同字符的次数
  bItems.forEach((item) => {
    occurenceItem.set(item, occurenceItem.get(item) + 1);
  });
  //获取颠倒后的a
  let aResult = [...a]
    .map((item) =>
      occurenceItem.get(item.toLowerCase()) % 2 ?
      item.toLowerCase() == item ?
      item.toUpperCase() :
      item.toLowerCase() :
      item
    )
    .join("");
  return aResult + bResult;
}
console.log(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe"));