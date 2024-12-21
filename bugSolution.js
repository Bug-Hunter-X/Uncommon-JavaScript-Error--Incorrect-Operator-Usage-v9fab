function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

// Corrected usage:
let result = add(5, 3); // Expected 8
console.log(result); 
result = subtract(10, 4); // Expected 6
console.log(result); 
result = multiply(7, 2); // Expected 14
console.log(result); 
try {
  result = divide(15, 0); // Throws an error
  console.log(result);
} catch (error) {
  console.error("Error:", error.message);
}

// Additional check for correct operator usage
function checkOperator(operator, a, b, expectedResult) {
    let result;
    switch (operator) {
        case '+': result = add(a,b); break;
        case '-': result = subtract(a,b); break;
        case '*': result = multiply(a,b); break;
        case '/': result = divide(a,b); break;
        default: throw new Error("Invalid operator");
    }
    if (result !== expectedResult) {
        throw new Error(`Incorrect operator usage: Expected ${expectedResult}, but got ${result}`);
    }
}

try{
checkOperator('+', 5,3, 8);
console.log("Addition check passed");
checkOperator('-', 10,4, 6);
console.log("Subtraction check passed");
checkOperator('*', 7,2, 14);
console.log("Multiplication check passed");
} catch (error) {
    console.error("Error:", error.message);
}
