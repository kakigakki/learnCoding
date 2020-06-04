/*  */
function workOnStrings(a, b) {
    let aSortedItem = [...a].sort();
    let bSortedItem = [...b].sort();
    console.log(aSortedItem);
    console.log(bSortedItem);

    let aSameNoRepeat = [...new Set(a)].sort();
    let bSameNoRepeat = [...new Set(b)].sort();

    let occurenceItem = new Map(
        aSameNoRepeat
        .filter((item, index, arr) => {
            return arr[index] === bSameNoRepeat[index];
        }, bSameNoRepeat)
        .map((item) => {
            return [item, 0];
        })
    );
    bSortedItem.forEach((item) => {
        occurenceItem2.set(item, occurenceItem2.get(item) + 1);
    });
    let bResult = b
        .split("")
        .map((item) => {
            if (occurenceItem.get(item) % 2) {
                return item.toUpperCase();
            }
            return item;
        })
        .join("");

    aSortedItem.forEach((item) => {
        occurenceItem.set(item, occurenceItem.get(item) + 1);
    });
    let aResult = a
        .split("")
        .map((item) => {
            if (occurenceItem2.get(item) % 2) {
                return item.toUpperCase();
            }
            return item;
        })
        .join("");
    console.log(occurenceItem2);
}
workOnStrings("abacddac", "bababacfa");