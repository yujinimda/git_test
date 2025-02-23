//열거형

enum Status {
  Success, // 0
  Failure, // 1
  Pending  // 2
}

let result: Status = Status.Success;
console.log(result); // 0

//예시

enum Role {
  Admin = "ADMIN", 
  User = "USER", 
  Guest = "Guest"
}

function checkPermission(role: Role) {
  if (role === Role.Admin) {
    console.log("관리자 접근 가능");
  } else {
    console.log("일반 사용자 접근 가능")
  }
}

checkPermission(Role.User);