const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (input) => {
  const num = Number(input);

  if (isNaN(num)) {
    console.log("That's not a number!");
  } else if (num % 2 === 0) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }

  rl.close();
});