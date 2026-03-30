const data1 = Number("42.7") + 8;
const data2 = parseInt("10abc");
const data3 = Number("10abc");

console.log(
    `"42.7" + 8 = ${data1} (tipo: ${typeof data1})\n` + 
    `parseInt("10abc") = ${data2} (tipo: ${typeof data2})\n` + 
    `Number("10abc") = ${data3} (tipo: ${typeof data3})`
);