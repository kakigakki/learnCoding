function generateHashtag(str) {
  if (str.replace(/\s/g, "").length <= 0 || str.replace(/\s/g, "").length >= 140) {
    return false
  }
  let result = "#" + str.match(/\b[A-z]*/g)
    .filter(item => item !== "")
    .map(item => item[0].toUpperCase() + item.slice(1)).join("")
  return result
}


console.log(generateHashtag("code" + " ".repeat(140) + "wars"));