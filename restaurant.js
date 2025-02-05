const age = 23;
const price = 1000

if (age<=12) {
    console.log('Free')
}
else if (age>=60) {
    // 50% Discount
    const discount = price*(50/100)
    const payAmount = price - discount
    console.log(payAmount)
}
else if (age>=50) {
    const discount = price*(25/100)
    const payAmount = price - discount
    console.log(payAmount)
}
else {
    console.log(payAmount)
}