//배열
let numbers: number[] = [1,2,3,4,5];
let names: string[] = ["zini", "goguma", "bob"]

//예시
function getLengths(arr: string[]): Number[] {
  return arr.map(str => str.length)
}

console.log(getLengths(["zini","goguma","bob"]))
