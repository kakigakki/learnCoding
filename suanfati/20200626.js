let lazyChain = function(arg) {
    let callList = [];
    return {
        invoke: function(fn, ...arg) {
            callList.push({ fn, arg });
            return this;
        },
        value: function() {
            return callList.reduce((cur, prev) => cur[prev.fn](...prev.arg), arg);
        },
    };
};

console.log(
    lazyChain([1, 2, 3])
    .invoke("map", (x) => x + 1)
    .invoke("reverse")
    .value()
);