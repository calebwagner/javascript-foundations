// Function Expression: IIFE's (immediately invoked function expression)
var teacher = "Kyle";

(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher); // Suzy
})(); // this () is what make's it an IIFE

console.log(teacher); // Kyle

// Block Scoping - Encapsulation ... from IIFE to ...
var teacher = "Kyle";

{
  let teacher = "Suzy"; // if "let" was "var" output of teacher would both be "Suzy" in console.log
  console.log(teacher); // Suzy
}

console.log(teacher); // Kyle

// another example of block scoping: let

function diff(x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  return y - x;
}

// another example of block scoping: let + let

function repeat(fn, n) {
  var result;
  for (let i = 0; i < n; i++) {
    result = fn(result, i);
  }
  return result;
}

// example of block scoping: explicit let block

function formatStr(str) {
  {
    let prefix, rest;
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }
  if (/^FOO:/.test(str)) {
    return str;
  }
  return str.slice(4);
}
