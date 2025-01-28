# JavaScript: Unexpected NaN with Null and Undefined Values

This repository demonstrates a common JavaScript error related to handling `null` and `undefined` values in a function.  The initial code fails to explicitly handle `undefined`, resulting in `NaN` outputs where a more graceful handling (e.g., returning 0 or throwing an error) is desired.

The `bug.js` file showcases the problem. The `bugSolution.js` file provides a corrected version that addresses the issue by explicitly checking for and handling `undefined` values.

## How to run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment (browser console, Node.js, etc.).
3. Run each file to see the difference in outputs.

This example highlights the importance of robust null and undefined checks in JavaScript to avoid unexpected behavior and improve the overall reliability of the code.