const age = 18;

if (age >= 18) {
  console.log("Go vote!");
} else {
  console.log("wait!!!");
}

const isEnrolled = false;

if (isEnrolled) {
  console.log("take class");
} else {
  console.log("enroll first");
}

const students = ["Sarah", "Bob", "Mark"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

for (let student of students) {
  console.log(students[0]);
}

while (students.length > 0) {
  let student = students.pop(); // removing students one by one until no more
  console.log(student);
}
