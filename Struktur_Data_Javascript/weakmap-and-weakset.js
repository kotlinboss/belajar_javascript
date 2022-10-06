import { inspect } from 'util'; // const { inspect } = require('util'); // on dicoding => https://www.dicoding.com/academies/256/tutorials/15795?from=13907

// perbedaan map dengan WEAKMAP terletak pada garbage collectionnya
// WEAKMAP tidak iterable jadi tidak memiliki fitur keys(), value() dan forEach()
// key nya tidak boleh tipe data primitif, harus object atau array
// tidak memiliki fitur size()


// contoh penggunaan Map yang masih menyimpan data walaupun sudah dihapus

let visitCountMap = new Map()

function countUser(user){
    let count = visitCountMap.get(user) || 0
    visitCountMap.set(user, count + 1)
}

let jonas = {name : "Jonas"}
countUser(jonas)

jonas = null // menghapus object jonas

setTimeout(function(){
    console.log(`Gagal menghapus jonas`)
    console.log(inspect(visitCountMap, { showHidden: true }));
}, 10000)

console.log()

// contoh penggunaan WeakMap yang memanfaatkan garbage collection
// jadi data akan dihapus jika dihapus

let visitsCountWeakMap = new WeakMap()

function countUser2(user){
    let count = visitsCountWeakMap.get(user) || 0
    visitsCountWeakMap.set(user, count + 1)
}

let jonny = {name : "Jonny"}
countUser(jonny)

jonny = null // menghapus object jonny

setTimeout(function(){
    console.log(`Berhasil menghapus jonny`)
    console.log(inspect(visitsCountWeakMap, { showHidden: true }));
}, 10000)

// Hal yang sama juga terjadi pada set dan WEAKSET