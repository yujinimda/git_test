"use strict";
const response = {
    status: "success",
    data: { id: 1, name: "zini" },
};
console.log(response);
const userId1 = 123;
const userId2 = "abc123";
console.log(userId1, userId2);
const request = (method, url) => {
    console.log(`Requesting ${url} with ${method} method`);
};
request("GET", "/users"); // 정상 실행
request("POST", "/users"); // 정상 실행
// request("PATCH", "/users"); // 오류! PATCH는 허용되지 않음
