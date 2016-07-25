## Module Pattern (Patron de modulos)
- Codigo Encapsulado
- Sin contaminar el scope global
- Evitar colision de nombres
- Unidades de codigo separados y ogranizados
- Simular propiedades y metodos privados (miembros privados)
- Limpieza de codigo
- Reveling Module Patter: Ser mas consistentes en nuestros scripts

- Javascript no tiene  modificadores de acceso, pero a traves de los closures podemos simular este comportamiento

### Se crea con una funcion anonima que se auto-invoca y regresa un objeto literal.

```javascript
var myModule = (function () {
	var counter = 0;

	return {
		incrementCounter: function () {
			return counter++;
		},
		resetCounter: function () {
			console.log('Counter value :' + counter);
			counter = 0;
		};
	};

})();

// Use

myModule.incrementCounter();
myModule.incrementCounter();
myModule.resetCounter()

```

## Revealing Module Pattern (Patron modulo revelado) 

```
var Counter = (function () {
	
	var counter = 0;
	var privateMethod = function () {
		// some private
	};

	var incrementCounter =  function () {
		return counter++;
	};

	var resetCounter = function () {
		console.log("Counter value" + counter);
		counter=0;
	};
	return {
		increment: incrementCounter,
		reset: resetCounter
	};
})();
```

### Private

```
var myModule = (function () {
	
	var _privateProperty = 10;

	var _privateMethodOne = function () {

	};

	var _privateMethodTwo = function () {
    	// some
    	_privateMethodOne();
  	};

  	var publicMethodOne = function () {

  	};

  	var publicMethodTwo = function () {

  	};

  	return {
  		publicProperty: "foo",
  		publicMethodOne: publicMethodOne,
  		publicMethodTwo: publicMethodTwo,
    	publicMethodThree: _privateMethodTwo // Alias of _privateMethodTwo
  	}

});


```


## Objetos
### Objetos simples
### Objetos literales: Es una manera de defiinir un objeto conforme a la sintaxis definida de Javascript.

```
var persona = {
  nombre: "Isaac",
  edad: 28,
  imprimir: function() {
      alert(this.nombre + " " + this.edad);
  }
};

persona.nombre = "Isaac Zepeda"; 
persona.imprimir(); 
```
### Constructor
```
functio Person () {
	
	this.name = "Isaac";
	this.age = 12;
	var count;

}
var isaac = new Person();
console.log(isaac.name)
console.log(isaac.count) // undefined, No se puede acceder es una variable local, no se instancia
```

```
function Person(name, age) {
	this.name =  name || "Josh";
	this.age = age || 23;
	this.walk = function () {
		console.log(this.name)
	}
};

var p1 = new Person("Albert", 12);

```

## Herencia

```
function Mamifero () {
	this.extemidades = 4;
}

Mamifero.prototype.ver = function () {
	console.log("Mirar ...");
}

Mamifero.prototype.caminar = function () {
	console.log("Camina" + this.extremidades);
}

// Hijo
function Humano () {
	
	this.extremidades = 2;
	this.nombre = "Juan";
}
// Se mencionamos quien es su padre
Humano.prototype = new Mamifero();

Humano.prototype.caminar = function () {
	console.log("Humano camina: " + this.extremidades);
};

Humano.prototype.correr = function () {
	console.log("Humano corre")
};

var perro = new Mamifero();
var persona = new Humano()

perro.ver();
perro.caminar();

persona.ver();
persona.caminar();
persona.correr();
```