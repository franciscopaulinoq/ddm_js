const n = 8;

let current = 0;
let next = 1;

for (let i = 0; i < n; i++) {
    process.stdout.write(`${current}${i + 1 === n ? "" : ", "}`);
    [current, next] = [next, current + next];
}