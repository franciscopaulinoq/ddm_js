const calculateSubTotal = (items) => {
    let total = 0;
    for (const item of items) {
        total += (item["preco"] * item["quantidade"]);
    }
    return total;
}

const getDiscount = (items, discountRate) => {
    const discountsApplied = [];
    let discountValue = 0;
    for (const item of items) {
        if (item["preco"] > 50.00) {
            const discountItem = (item["preco"] * (discountRate / 100) * item["quantidade"]);
            discountValue += discountItem;
            discountsApplied.push({nome: item["nome"], valor: discountItem});
        }
    }
    return {totalDiscount: discountValue, discounts: discountsApplied};
}

const items = [
    {"nome": "Camiseta", "preco": 45.90, "quantidade": 2},
    {"nome": "Tenis", "preco": 189.90, "quantidade": 1},
    {"nome": "Meia", "preco": 12.50, "quantidade": 3},
];

const subtotal = calculateSubTotal(items);
const applieds = getDiscount(items, 10);
const total = subtotal - applieds.totalDiscount;

console.log("Carrinho:");
console.log(items);
console.log(`Subtotal: R$${subtotal.toFixed(2)}`);

for (const d of applieds.discounts) {
    console.log(`Desconto (${d.nome}): -R$${d.valor.toFixed(2)}`);
}

console.log(`Total: R$${total.toFixed(2)}`);
