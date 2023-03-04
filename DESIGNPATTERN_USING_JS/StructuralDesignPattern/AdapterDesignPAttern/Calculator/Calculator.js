class Calculator {
    operation(num1, num2, operation) {
      switch (operation) {
        case 'multiplication':
          return num1 * num2;
        case 'division':
          return num1 / num2;
        default:
          return NaN;
      }
    }
  }
//   
//   export default Calculator;
  
const calculator = new Calculator();
const multi = calculator.operation(1, 2, 'multiplication');
console.log(multi ); //output 2

const div = calculator.operation(10, 2, 'division');
console.log(div); //output 5