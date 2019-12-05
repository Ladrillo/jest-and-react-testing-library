export function operations(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw Error("NaN");
  }
  return {
    sum: num1 + num2,
    product: num1 * num2,
    max: Math.max(num1, num2),
    numbers: [num1, num2],
  }
}