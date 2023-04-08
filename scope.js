function outer(a, b) {
  a = "a is in the outer scope"; // 1. Declare two variables, A and B in the outer function's scope and set them to a string and an object respectively.
  b = { scope: "b is in the outer scope" };
  console.log("Logging Immediately:", a, b); // 1. Log their values immediately.

  function inner() {
    console.log("Logging in Inner Function:", a, b); // 2. Log the values of A and B in the inner function.
  }
  a = " 'A' in the inner scope, with a new value"; // 3. Update the inner function to take two parameters named A and B.
  b = { scope: " 'B' is in the inner scope, with a new value" };
  b.scope = " 'B' is in the inner scope, with a new updated value"; // 6. Inside the inner function, update a property of the B object.
  inner(a, b); // 4. Pass A and B in as arguments when you execute inner().
  console.log(a, b); // 5. Inside the inner function, assign new values to A and B and log them at the end of the function AND after the execution of inner(a,b).
}

outer();
