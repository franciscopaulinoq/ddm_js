const n = 4;

for (let i = 1; i <= n; i++) {
    const space = " ".repeat(n - i);
    const asterisks = "*".repeat(2 * i - 1);

    console.log(space + asterisks);
}