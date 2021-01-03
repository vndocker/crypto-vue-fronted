export function formatCurrency(value: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(value);
}

export function formatCurrencyZeroFaction(value: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0
  }).format(value);
}
