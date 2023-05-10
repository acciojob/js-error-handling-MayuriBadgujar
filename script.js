//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evalString(expr) {
  // Check for invalid combinations of operators
  if (/\+\+|\/\/|\/\*|\*\//.test(expr)) {
    throw new InvalidExprError();
  }

  // Check for invalid starting and ending operators
  if (/^[+\/*]/.test(expr)) {
    throw new SyntaxError("Expression should not start with invalid operator");
  }
  if (/[+\/*-]$/.test(expr)) {
    throw new SyntaxError("Expression should not end with invalid operator");
  }

  // Evaluate the expression
  return eval(expr);
}

// Test the evalString function with try-catch block
try {
  const result = evalString("1+2*3");
  console.log(result);
} catch (error) {
  if (error instanceof OutOfRangeError) {
    console.error(error.message);
  } else if (error instanceof InvalidExprError) {
    console.error(error.message);
  } else {
    console.error(error);
  }
}
