//유니온 리터럴 타입
//리터럴 타입은 보통 유니온 타입 안에서 사용이 되며 특정값만 허용해주는 역할을 합니다.
type ApiResponse = {
  status: "success" | "error"
  data: any;
  message?: string;
}

const response: ApiResponse = {
  status: "success",
  data: {id:1, name:"zini"},
}

console.log(response)

//유니온 타입
//ID가 숫자 또는 문자열일 수 있는 경우

type ID = number | string; // 숫자 또는 문자열 가능

const userId1: ID = 123;
const userId2: ID = "abc123";

console.log(userId1, userId2);

//리터럴 타입
//정해진 값만 실행되게?

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE"; // 정해진 값만 가능

const request = (method: HTTPMethod, url: string) => {
  console.log(`Requesting ${url} with ${method} method`);
};

request("GET", "/users"); // 정상 실행
request("POST", "/users"); // 정상 실행
// request("PATCH", "/users"); // 오류! PATCH는 허용되지 않음