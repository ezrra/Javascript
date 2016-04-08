// Ejecutar con Node o utiliza Browserify para construir bundle.js

var Complex = require('./complex');
var math = require('./math');

console.log(math.add(40, 2));
var cl = new Complex(40, 3);
console.log(math.add(cl, 2));