export function convertPriceToBrl(price: string | number) {
    return Number(price).toLocaleString("pt-BR", { style: "decimal", currency: "BRL" })
}