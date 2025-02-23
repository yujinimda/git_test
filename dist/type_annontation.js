"use strict";
//타입 할당
let userName = "zini"; //문자만 가능
let age = 5; //숫자만 가능
let isAdmin = true; //불리언 값만 가능
//예제
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("goguma"));
//여기서 궁금한점이 나는 이미 name에 string값을 부여했는데 왜 또 뒤에 string을 붙여야하나?
//name: string → 매개변수 name의 타입을 지정
//: string → 함수가 반환하는 값의 타입을 지정
//사실 TypeScript는 반환 값을 자동으로 추론하기 때문에 : string을 생략해도 정삭적으로 동작한다
//다만 명확하게 타입을 선언하면 코드 가독서잉 좋아지고, 실수를 방지할수있다.
//그래서 실무에서는 반환 타입을 명시하는 경우가 많다고 한다.
