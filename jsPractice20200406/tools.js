function toggleClass(obj, className) {
    if (!hasClass(obj, className)) {
        obj.className = obj.className + " " + className;
    } else {
        obj.className.replace(className, "");
    }
}

function hasClass(obj, className) {
    var regText = "\\b" + className + "\\b"
    var reg = new RegExp(regText, "g");
    return reg.test(obj.className);
}

function addClass(obj, className) {
    if (!hasClass(obj, className)) {
        obj.className = obj.className + " " + className;
    }
}

function removeClass(obj, className) {
    if (hasClass(obj, className)) {
        var regText = "\\b" + className + "\\b"
        var reg = new RegExp(regText, "g");
        obj.className = obj.className.replace(reg, "");
    }
}

function move(obj, styleName, speed, target, callback) {
    clearInterval(obj.time);

    var style = getComputedStyle(obj, null);
    var oldValue = parseInt(style[styleName]);
    console.log(oldValue)
    var newValue = target;
    if (newValue < oldValue) {
        speed = -speed;
    }
    newValue = oldValue;
    obj.time = setInterval(function() {
        newValue += speed;
        obj.style[styleName] = newValue + "px";
        if ((newValue >= target && oldValue < target) || (newValue <= target && oldValue > target)) {
            newValue = target
            obj.style[styleName] = newValue + "px";
            clearInterval(obj.time);
            callback && callback();
        }
    }, 10)
}