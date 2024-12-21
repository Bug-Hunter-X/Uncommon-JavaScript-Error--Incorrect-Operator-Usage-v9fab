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

// Uncommon error: Using the wrong operator
let result = add(5, 3); // Expected 8
console.log(result);  
result = subtract(10, 4); // Expected 6
console.log(result);   
result = multiply(7, 2); // Expected 14
console.log(result);  
result = divide(15, 0); // Throws an error
console.log(result);