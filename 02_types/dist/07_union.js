"use strict";
let id = 100;
function printId(sid) {
    console.log('Your Id is : ' + sid);
    if (typeof sid == 'string') {
        console.log(sid.toUpperCase());
    }
    else {
        console.log(sid);
    }
}
printId(111);
printId("11133");
// printId({
//     MyId: 123445
// })
function wellcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('hello,' + x.join(' and '));
    }
    else {
        console.log('welcome lone traeler  ' + x);
    }
}
wellcomePeople('A');
wellcomePeople(['a', 'b', 'cneeee']);
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree("aaaa"));
console.log(getFirstThree([2, 3, 4, 5, 6]));
