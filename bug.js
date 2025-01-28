function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Addition
}

console.log(foo(null, 5)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo(5, 10));  // Output: 15

// Unexpected behavior:
console.log(foo(undefined, 5)); // Output: NaN  Should ideally handle undefined
console.log(foo(5, undefined)); // Output: NaN  Should ideally handle undefined