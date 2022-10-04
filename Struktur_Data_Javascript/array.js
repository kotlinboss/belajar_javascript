let laptop = [
    "Lenovo",
    "Macbook",
    "Asus",
    "Acer",
]

console.log(laptop)
console.log("\n===== menambah data baru di akhir array =====")
// menambahkan nilai pada array
laptop.push('Toshiba')
console.log(laptop)

console.log("\n===== menghapus data di akhir array =====")
// menghapus nilai pada array
laptop.pop()

console.log(laptop)

console.log("\n===== menghapus data di awal array =====")
// menambah data di awal
laptop.shift()
console.log(laptop)

console.log("\n===== menambah data di awal array =====")
// menambah data di awal
laptop.unshift("Dell")
console.log(laptop)


console.log("\n=== menghapus data ke-3(asus) pada array ===")
console.log("=== meninggalkan keterangan <1 empty item> ===")
// menambah data di awal
delete laptop[2]
console.log(laptop)

console.log("\n=== menghapus data ke-3(asus) pada array ===")
console.log("TANPA meninggalkan keterangan <1 empty item>")
// menambah data di awal
laptop.splice(1,2) // menghapus index ke 1 sebanyak 2 elemen
console.log(laptop)





