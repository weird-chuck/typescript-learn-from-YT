let user: [number, string] = [1, "Mosh"];
user.push(1);

//contoh type data enum

const enum Size {
  Small = 1,
  Medium,
  Large,
}

const mySize = Size.Large;

console.log(mySize);

//contoh function

function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 2;
}

calculateTax(1000, 2022);

/* kalau parameter yang dipanggil hanya 1 maka kita harus bikin
parameter default dengan pake tanda ? dan || serta tentukan input defaultnya dalam hal ini 2020 */
function calculateTax2(income: number, taxYear?: number): number {
  if ((taxYear || 2020) < 2022) return income * 1.2;
  return income * 2;
}

calculateTax2(1000);

/* atau kita bisa langsung menggunakan parameter seperti contoh di bawah ini */
function calculateTax3(income: number, taxYear = 2020): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 2;
}

calculateTax3(1000);
