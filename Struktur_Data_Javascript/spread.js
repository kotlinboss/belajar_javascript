const laptop = [
    "Lenovo",
    "Macbook",
    "Asus",
    "Acer",
]

const handPhone = [
    "Xiomi",
    "Nokia",
    "Oppo",
    "Vivo",
    "Samsung",
]

console.log(...laptop)


// Jika menggabungkan 2 array diatas
// maka hasilnya akan seperti ini

/*
[
    [ 'Lenovo', 'Macbook', 'Asus', 'Acer' ],
    [ 'Xiomi', 'Nokia', 'Oppo', 'Vivo', 'Samsung' ]
]
*/
// Dua array didalam array baru
  

const device = [laptop, handPhone]
console.log(device)

// akan tetapi
// jika menggunakan combine ala spride
// maka hasilnya akan seperti ini

/*
[
  'Lenovo',  'Macbook',
  'Asus',    'Acer',
  'Xiomi',   'Nokia',
  'Oppo',    'Vivo',
  'Samsung'
]
*/
// Array baru mengandung gabungan 2 array directly

const deviceSpread = [...laptop, ...handPhone]
console.log(deviceSpread)

