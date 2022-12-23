"use strict";
function printCoord1(pt) {
}
printCoord1({
    x: 100,
    y: 200
});
function printNewID(id) {
}
printNewID(100);
printNewID('hello');
function sanitizedInput(str) {
    return str.slice(0, 2);
}
let userInput = sanitizedInput("hello");
userInput = 'sssss';
