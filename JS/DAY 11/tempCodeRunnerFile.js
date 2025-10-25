Pattern 5 -->
let n = Number(prompt("Enter any number: "));
for (let i = 1; i <= n; i++) {
  for (let j = n; j >= i; j--) {
    process.stdout.write("* ");
  }
  console.log();
  //  process.stdout.write(" ");
}