"use strict";
function greet(name) {
    console.log('hello,' + name.toUpperCase + '!!');
}
greet('42');
function getFavoriteNumber() {
    return 26;
}
const names = ['xiaoqian', 'xiaofeng'];
names.forEach(function (s) {
    console.log(s.toUpperCase);
});
names.forEach(s => {
    console.log(s.toUpperCase);
});
