/**
 * Adds two numbers
 * @param firstNumber Consists of the first operand of the addition
 * @param secondNumber Consists of the second operand of the addition
 * @return The addition of the two numbers `firstNumber` and `secondNumber`
 * Usage:
 * ```typescript
 * add(1, 7) = 8
 * add(1.7, 3.5) = 5.2
 * ```
 */
function add(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}

console.log(`add(1, 7): ${add(1, 7)}`);
console.log(`add(1.7, 3.5): ${add(1.7, 3.5)}`);
