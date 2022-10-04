var a = [];
(function () {
   'use strict';
   for (let i = 0; i < 5; ++i) { // *** `let` works as expected ***
     a.push( function() {return i;} );
   }
} ());
console.log(a.map( function(f) {return f();} ));
// output let => [ 0, 1, 2, 3, 4 ]
// output var => [ 5, 5, 5, 5, 5 ]