
// data pada set tidak ada yang duplikasi

const numberSet = new Set([1, 4, 6, 1, 5, 4])
console.log(numberSet)
console.log()

// menambahkan data pada set
numberSet.add(3)
numberSet.add(6)
numberSet.add(3)

console.log(numberSet)
console.log()

// tidak memperdulikasi duplikasi
// kita akan hapus nilai 4
numberSet.delete(4)
console.log(numberSet)
