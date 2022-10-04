const book = {
    title : "Seni hidup minimalis",
    author : "Francine Jay",
    publisher : "PT Gramedia Pustaka Utama",
    "number of page" : 140,
    pemilik : "Jonry Simbolon"
}

console.log(book)
console.log("\n")
// mengakses property pada object book
console.log(`Judul buku : ${book.title}`)
console.log(`Jumlah halaman : ${book["number of page"]} lembar`)

console.log("\n===== mengubah nilai pada property =====\n")

// merubah nilai property pada object book
book.author = "Francine J"
book["title"] = "SENI HIDUP MINIMALIS" //perubahan hanya pada besar karakter saja :D

// panggil property yang sudah diubah
console.log(`Pengarang : ${book.author}`)
console.log(`Judul buku : ${book["title"]}`)

console.log("\n===== menghapus propery =====\n")

delete book.pemilik

console.log(book)