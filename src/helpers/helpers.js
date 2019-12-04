export function operations(num1, num2) {
  return {
    sum: num1 + num2,
    product: num1 * num2,
    max: Math.max(num1, num2),
    numbers: [num1, num2],
  }
}