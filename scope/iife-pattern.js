// TODO: FUNCTION SCOPING
var teacher = "Kyle";

(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);
})();

// OR

(function (teacher) {
  console.log(teacher);
})("Suzy");

// anotherTeacher();

console.log(teacher);

// TODO: BlOCK SCOPING
var teacher = "Kyle";
{
  let teacher;
}
