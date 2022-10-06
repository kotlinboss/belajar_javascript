const biodata = {
    firstName : "Jonry",
    lastName : "Kw",
    age : "250",
    location : "Earth",
}

const {firstName, lastName, location} = biodata

console.log(`\nTinggal di ${location}\n`)

// =============================================

// menginsialisasi nama baru
const book = {
    title : "Seni hidup minimalis",
    author : "Francine Jay",
    publisher : "PT Gramedia Pustaka Utama",
    "number of page" : 140,
    pemilik : "Jonry Simbolon"
}

let title = "Dictionary"
let pemilik = "Adam"; // something weird in destructuring
// require to add semi colon before initialization

// menginisialisasi
({title, pemilik} = book)

console.log(title)
console.log(pemilik)

// mengisi data yang tidak ada di object
// sebagai example, kita pake object book

const {author, harga_buku = 88000} = book
console.log(`Harga buku : ${harga_buku}`)

// mengubah penamaan property pada object

const {title: judul, author: pengarang} = book
console.log(`Judul buku : ${judul}`)
console.log(`Pengarang : ${pengarang}`)