"use strict";
function printAll2(str) {
    if (str && typeof str === 'object') {
        for (const s of str) {
            console.log(str);
        }
    }
    else if (typeof str === 'string') {
        console.log(str);
    }
    else {
        // ...
    }
}
function mutiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(x => { return x * factor; });
    }
}
console.log(mutiplyAll([3, 4], 2));
console.log(mutiplyAll(undefined, 2));
