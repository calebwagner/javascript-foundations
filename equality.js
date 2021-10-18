// TODO: COERCIVE EQUALITY: NULL == UNDEFINED
var workshop1 = { topic: null };
var workshop2 = {};

// BAD way to do this ...
if (
    (workshop1.topic === null || workshop1.topic === undefined) &&
    (workshop2.topic === null || workshop2.topic === undefined) &&
) {
    // ... run the code
}

// GOOD way to do this ...
if (
    workshop1.topic == null && workshop2.topic == null
) {
    // ...run the code
}

// TODO: CORNER CASE FOR ==
[] == ![]; // true ... why?
var workshop1Students = [];
var workshop2Students = [];

if (workshop1Students == !workshop2Students) {
    // ...
}

if (workshop1Students != workshop2Students) {
    // ...
}

// TODO: CORNER CASES FOR BOOLEANS
var workshopStudents = [];

// appropriate way to check truthy or falsy values
// because the ToBoolean happens implicitly
if (workshopStudents) {
    // ...
}

// BAD way to check truthy or falsy values
if (workshopStudents  == true) {
    // ...
}
// or ...
if (workshopStudents  == false) {
    // ...
}
// why bad????
// because the JS algorithm is doing ...
// if (workshopStudents == true) {
// if ("" == true) {
// if (0 === 1) {
// if (false) {
// }