// The operators to be supported
var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Subtract"] = "subtract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
    Operator["Modulo"] = "modulo";
})(Operator || (Operator = {}));
const calculator = function (first, second, op) {
    const tuple = operations.find(tpl => tpl[0] === op);
    const operation = tuple[1];
    const result = operation(first, second);
    return result;
};
// An empty array that can hold multiple tuples of the [Operator, Operation] type
// The dictionary to store all the methods
const operations = [];
const add = function (first, second) {
    return first + second;
};
operations.push([Operator.Add, add]);
const subtract = function (first, second) {
    return first - second;
};
const multiply = function (first, second) {
    return first * second;
};
const divide = function (first, second) {
    return first / second;
};
const modulo = function (first, second) {
    return first % second;
};
operations.push([Operator.Subtract, subtract]);
operations.push([Operator.Multiply, multiply]);
operations.push([Operator.Divide, divide]);
operations.push([Operator.Modulo, modulo]);
// Test
console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Subtract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
console.log(calculator(14, 3, Operator.Modulo));
