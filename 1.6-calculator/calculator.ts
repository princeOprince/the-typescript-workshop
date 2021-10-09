// The operators to be supported
enum Operator {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
  Modulo = "modulo"
}

const calculator = function (first: number, second: number, op: Operator) {
  const tuple = operations.find(tpl => tpl[0] === op);
  const operation = tuple[1];
  const result = operation(first, second);
  return result;
}

// A type alias for a function that does a calculation on two numbers
type Operation = (x: number, y: number) => number;

// An empty array that can hold multiple tuples of the [Operator, Operation] type
// The dictionary to store all the methods
const operations: [Operator, Operation][] = [];

const add = function (first: number, second: number) {
  return first + second;
}

operations.push([Operator.Add, add]);

const subtract = function (first: number, second: number) {
  return first - second;
}

const multiply = function (first: number, second: number) {
  return first * second;
}

const divide = function (first: number, second: number) {
  return first / second;
}

const modulo = function (first: number, second: number) {
  return first % second;
}

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