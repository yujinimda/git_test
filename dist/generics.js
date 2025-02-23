"use strict";
// 제네릭
function indentity(value) {
    return value;
}
console.log(indentity("Hello")); //string 타입지정
console.log(indentity(4)); //number 타입지정
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // 1 (number)
console.log(getFirstElement(["a", "b", "c"])); // "a" (string)
