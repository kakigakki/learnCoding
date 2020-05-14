function list(names) {
    //return names.map(item => item.name).join(", ").replace(/\,\s[A-z]*$/, (matchStr => matchStr.replace(",", " &")))
    return names.map(item => item.name).join(", ").replace(/(.*),(.*)$/, "$1 &$2")

}
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]))