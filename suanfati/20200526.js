//自制三个数学函数
//另外，如果没有Math.floor（）,可以用~~number
Math.round = function(number) {
    return number - parseInt(number) >= 0.5 ?
        parseInt(number) + 1 :
        parseInt(number);
};

Math.ceil = function(number) {
    return number - parseInt(number) > 0 ? parseInt(number) + 1 : number;
};

Math.floor = function(number) {
    return parseInt(number);
};