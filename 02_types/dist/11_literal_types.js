"use strict";
let testString = 'hello world';
testString = 'nihao';
const constantString = 'hello world';
// constantString = ''
let x2 = 'hello';
// x = 'world'
function printText(s, alignment) { }
printText('hello', 'left');
// printText('hello','center2')
function compare(a, b) {
    return a == b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
}
configure('auto');
// configure('aotumatic')
configure({ width: 3 });
let b1 = true;
let b2 = false;
const obj2 = {
    count: 0
};
if (true) {
    obj2.count = 1;
}
function handleRequest(url, method) {
}
const req = {
    url: 'https://examples.com',
    method: 'GET'
};
handleRequest(req.url, req.method);
