"use strict";
//열거형
var Status;
(function (Status) {
    Status[Status["Success"] = 0] = "Success";
    Status[Status["Failure"] = 1] = "Failure";
    Status[Status["Pending"] = 2] = "Pending"; // 2
})(Status || (Status = {}));
let result = Status.Success;
console.log(result); // 0
//예시
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
function checkPermission(role) {
    if (role === Role.Admin) {
        console.log("관리자 접근 가능");
    }
    else {
        console.log("일반 사용자 접근 가능");
    }
}
checkPermission(Role.User);
