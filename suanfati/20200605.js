/* 将数字转为价钱格式 */

var numberToPrice = function(number) {
    if (typeof number != "number") {
        return "NaN";
    }
    let price = (number + "").replace(/-?(\d*).?(\d*)$/, (m, s1, s2) => {
        return (
            [...s1]
            .reverse()
            .map((item, index) => (index % 3 ? item : item + ","))
            .reverse()
            .join("")
            .slice(0, -1) +
            "." +
            s2.slice(0, 2).padEnd(2, "0")
        );
    });
    return number > 0 ? price : "-" + price;
};

console.log(numberToPrice(-123));