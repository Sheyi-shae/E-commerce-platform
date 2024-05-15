const CurrencyFormatter= new Intl.NumberFormat(undefined,{currency:"NGN", style:"currency"})

export function FormatCurrency(number){
return CurrencyFormatter.format(number)
}