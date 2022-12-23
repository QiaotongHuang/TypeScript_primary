"use strict";
function printCoord(pt) {
    console.log('坐标的X值为： ' + pt.x);
    console.log('坐标的Y值为： ' + pt.y);
}
printCoord({
    x: 3,
    y: 7
});
function printName(obj) {
    // console.log(obj.last.toLowerCase())
    if (obj.last !== undefined) {
        console.log(obj.last.toLowerCase());
    }
    console.log(obj.last?.toLowerCase());
}
printName({
    first: 'rrr'
});
printName({
    first: 'rrr',
    last: "Tee"
});
