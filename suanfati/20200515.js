var isPP = function(n) {
    var index = 2;
    var arr = [];
    while (true) {
        var num = 2;
        var bot = 2;
        if (Math.pow(bot, index) > n) {
            break;
        } else if (Math.pow(bot, index) == n) {
            arr.push(Array.of(bot, index));
            break;
        }

        while (num < n) {
            num = Math.pow(bot, index);
            if (n == num) {
                arr.push(Array.of(bot, index));
            }
            bot++;
        }
        index++;
    }
    if (arr.length) {
        return arr[0];
    } else {
        return null;
    }
};

console.log(isPP(2608757776));