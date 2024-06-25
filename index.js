function calculator(num1, num2, operation) {
  
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "unknown value";
    }
    
}
function add(num1, num2) {
        return num1 + num2; 
    }
    
function subtract(num1, num2) {
        return num1 - num2;
    }
    
function multiply(num1, num2) {
        return num1 * num2;
    }
    
function divide(num1, num2) {
        return num1 / num2;
    }

console.log(add(1,6, "+")); 
console.log(subtract(1,6, "-"));
console.log(multiply(1,6, "*")); 
console.log(divide(1,6, "/")); 
console.log(calculator(1, "6", "*")); 


