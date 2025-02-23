//튜플
let user2: [string, number] = ["Alice", 30]; // 첫 번째 요소는 string, 두 번째는 number

//예시
function getUserInfo(): [string, number] {
  return ["Bob", 28]; // 튜플 사용
}

const [name2, age2] = getUserInfo();
console.log(name); // "Bob"
console.log(age);  // 28