"use strict";
//배열
let numbers = [1, 2, 3, 4, 5];
let names = ["zini", "goguma", "bob"];
//예시
function getLengths(arr) {
    return arr.map(str => str.length);
}
console.log(getLengths(["zini", "goguma", "bob"]));
