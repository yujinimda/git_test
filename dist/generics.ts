// 제네릭
function indentity<T>(value: T): T {
  return value;
}

console.log(indentity<string>("Hello")); //string 타입지정
console.log(indentity<number>(4)); //number 타입지정

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1 (number)
console.log(getFirstElement(["a", "b", "c"])); // "a" (string)
