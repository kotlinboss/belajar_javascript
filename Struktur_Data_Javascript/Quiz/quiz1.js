/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai boolean apa pun.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */


// TODO
const restaurant = {
    name : "Healty",
    city : "Medan",
    "favorite food" : "Milo",
    "favorite drink" : "Vegetable food",
    isVegan : false,
}

console.log(restaurant)
console.log()

let name = "Mozart restaurant"
console.log(`local variable name before : ${name}`);

({name} = restaurant)
console.log(`local variable name after : ${name}`)
console.log()

let favoriteDrink = "Classic drink"
console.log(`local variable fav drink before : ${favoriteDrink}`);

({"favorite drink": favoriteDrink} = restaurant)
console.log(`local variable fav drink after : ${favoriteDrink}`)

/**
 * Jangan hapus kode di bawah ini
 */
 module.exports = { restaurant, name, favoriteDrink };