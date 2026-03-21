const phpFormatter = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
})

export function formatPhpCurrency(amount: number): string {
    return phpFormatter.format(amount)
}
