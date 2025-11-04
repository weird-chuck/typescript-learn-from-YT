let user: [number, string] = [1, 'Mosh']
user.push(1)//ini masih menjadi anomail? karena ketika di push dia tetap ngepush padahal anotasinya hanya membolehkannya

//contoh type data enum

const enum Size {Small = 1, Medium, Large}

const mySize = Size.Large

console.log(mySize)

//contoh function 

function calculateTax (income: number, taxYear: number): number {
if (taxYear < 2022)
    return income * 1.2
    return income * 2
}

calculateTax(1000, 2000)