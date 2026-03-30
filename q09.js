const originalValue = 250;

const getDiscountRate = (value) => {
    if (value <= 100.00) return 0.0;
    if (value <= 300.00) return 0.1;
    return 0.2;
}

const discountRate = getDiscountRate(originalValue);
const discount = originalValue * discountRate;
const finalValue = originalValue - discount;

console.log(
    `Original: R$${originalValue.toFixed(2)} | ` + 
    `Desconto: ${discountRate * 100}% (R$${discount.toFixed(2)}) | ` + 
    `Final: R$${finalValue.toFixed(2)}`
);
