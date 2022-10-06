const map = new Map([
    ['1', 'book'],
    [1, 'number of book'],
    [true, false],
])

console.log(map)
console.log()

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
])


// mengambil jumlah property pada map
// mengambil value dari London
// menambah property baru ke map
console.log(capital.size)
console.log(capital.get("London"))
console.log(capital.set("New Delhi", "India"))
console.log(capital.size)
console.log()

// kenapa menggunakan get dan set
// karna ketika membuatnya seperti ini
const alphabets = new Map()

alphabets["b"] = "B"

console.log(alphabets["b"])
// fungsi has dan delete menjadi tidak berguna
// dan lagi lagi bukan best practice javascript
// karna akan disimpan menjadi generic object
console.log(alphabets.has("b"))
console.log(alphabets.delete("b"))