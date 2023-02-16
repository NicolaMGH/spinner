let delay = -100;
const symbol = ['|', '/', '-', '\\', '|'];

for (const sym of symbol) {
  setTimeout(() => {
    process.stdout.write(`\r${sym}   `);
  }, delay += 200);
}
