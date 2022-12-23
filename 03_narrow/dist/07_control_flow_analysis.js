"use strict";
function example2() {
    let x;
    x = Math.random() < 0.5;
    // let x: boolean
    console.log(x);
    if (Math.random() < 0.5) {
        x = 'hello';
        // x: string
        console.log(x);
    }
    else {
        x = 100;
        // x: number
        console.log(x);
    }
    return x;
}
let x = example2();
x = 'hello';
x = 2;
// x = true
