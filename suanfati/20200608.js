/* 比较两个对象是否时深度相同  */

function deepCompare(o1, o2) {
    if (
        (o1 instanceof Array && o2 instanceof Array) ||
        (o1 instanceof Object && o2 instanceof Object)
    ) {
        let o1Entries = Object.entries(o1).sort();
        let o2Entries = Object.entries(o2).sort();
        o1 = mapToObj(new Map(o1Entries));
        o2 = mapToObj(new Map(o2Entries));
        for (const key in o1Entries.length >= o2Entries.length ? o1 : o2) {
            if (o2.hasOwnProperty(key)) {
                if (!deepCompare(o1[key], o2[key])) return false;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return o1 === o2;
    }
}

function mapToObj(map) {
    let obj = {};
    for (let [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}

/*
 //大神写法，用上了every
function deepCompare(o1, o2) {
    if (o1 === o2) return true;
    if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
    if (Object.keys(o1).length !== Object.keys(o2).length) return false;
    var keys = Object.keys(o1);
    return keys.every(function(key) {
      return deepCompare(o1[key], o2[key]);
    });
  };
   */