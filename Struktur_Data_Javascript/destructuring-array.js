const laptop = [
    "Lenovo",
    "Macbook",
    "Asus",
    "Acer",
]

// mengubah penamaan dalam property array
const[firstLaptop, secondLaptop, thridLaptop] = laptop
console.log(`Laptop pertama : ${firstLaptop}`)
console.log()

// meng-overwrite variable local dengan property array

let myLaptop = "Lenovo"
let herLaptop = "None"

console.log(`Sebelum swap`)
console.log(`My laptop ${myLaptop} and her laptop ${herLaptop}`); // sebelum proses overwrite, harus nambah semicolon before

[myLaptop, herLaptop] = laptop

console.log(`Sesudah swap`)
console.log(`My laptop ${myLaptop} and her laptop ${herLaptop}`)
console.log()

// swap nilai variable local

let a = 1
let b = 2


console.log(`Sebelum swap`)
console.log(`a : ${a} and b : ${b}`); // sebelum proses overwrite, harus nambah semicolon before

[a, b] = [b, a]

console.log(`Sesudah swap`)
console.log(`a : ${a} and b : ${b}`); // sebelum proses overwrite, harus nambah semicolon before
