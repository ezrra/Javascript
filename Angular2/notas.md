# Componentes: Todo el framework se desarrolla en componentes.

Arbol de componentes.
Generalmente tendras un arbol de componentes al crear tu aplicacion y cada persona lo acomodara de menera preferida. Siempre existira un componente padre y a partir de ahi podran colgar todas las ramas que sean necesarias para crear tu aplicacion.

Mientras que los componentes no solo encapsulan un contenido, sino tambien una funcionalidad.

En un arbol, como posible organizacion, podemos tener en un primer nivel los bloques principales de la pantalla de nuestra aplicacion.

* Una barra de herramientas, con interfaces para acciones principales (menu).
* Una parte principal, donde se despliega las diferentes pantallas de la aplicacion.
* Una area de logueo de usuarios

Luego, cada uno de los componentes principales se podra subdividir, si se desea, en nuestros arboles de componentes.

* En barra de herramientas principal podriamos tener un componente por cada herramienta.
* En el area principal podriamos tener un componente para cada pantalla de la aplicacion o vista. A su vez, dentro de cada vista o pantalla podriamos tener otra serie de componentes que implementen diversos funcionalidades.

Componentes VS Directivas.

La clave en este caso es que los componentes son piezas de negocio, mientras que las directivas se suelen usar para presentacion y problemas estructurales.

Para ser exactos, en la documentacion de Angular 2 nos indican que un componente es un tipo directiva, Existen 3 tipos de directiva:

Componente: Es una directiva con un template. Habra muchas en tu aplicacion y resuelven necesidades del negocio.

Directivas de Atributos: Cambian la apariencia o comportamiento de un elemento (ngClass).

Directivas estructurales: Son las que realizan cambios en el Dom del documento, añadiendo, o quitando elementos (ngIf que añade o remueve elementos del DOM con respecto a una expresion condicional).

Partes de un componente:

3 partes fundamentales:
* un template (HTML)
* una clase (Controlador Javascript)
* una funcion decoradora (Es una especie de registro del componente y que hace de pegamento entre el Javascript y HTML)


´´´
// Creo un nuevo objeto para registrar un component, generando un nuevo prototipo
var elemento = Object.create(HTMLElement.prototype);

// Defino una funcion callback para el instante del ciclo de vida "created"
elemento.createCallback = function () {
	console.log('se ha creado un elemento')
};

// Defino una funcion callback para el instante del ciclo de vida "attached"
elemento.attachedCallback = function () {
	console.log('se ha añadido un elemento al DOM')
};

// Defino una funcion callback para el instanceo del ciclo de vida "detached"
elemento.detachedCallback = function () {
	console.log('se ha retirado un elemento del DOM');
};

// Defino una funcion callback para el instante del ciclo de vida "attributeChanged"
elemento.attributeChangedCallback = function (attr, oldVal, newVal) {
	console.log("Cambiado ", attr, ' al valor: ', newVal );
};

// Este es el codigo para registrar el componente, en el que indicamos su prototipo que acabamos de definir 
document.registerElement('ciclo-de-vida', {
	prototype: elemento
});

´´´

Poniendo la etiqueta en el HTML

´´´
<ciclo-de-vida></ciclo-de-vida>
´´´
Otros metodos del ciclo de vida necesarias para las funciones

´´´
<button id="cambarAttr">Cambiar atributo</button>
<button id="quitarDOM">Quitar el elemento del DOM</button>
<button id="crearElemento">Crear un elemento, solo en memoria</button>
´´´
Esos son los tres botones a los que le colocamos tres manejadores de eventos para realizar cosas con elementos:

´´´
document.getElementById('cambiarAtr').addEventListener('click', function () {
	document.querySelector('ciclo-de-vida').setAttribute('data-set', 'test-value');
});

document.getElementById('quitarDOM').addEventListener('click', function () {
	document.body.removeChild(document.querySelector('ciclo-de-vida'));
});

document.getElementById('crearElemento').addEventListener('click', function () {
	document.createElement('ciclo-de-vida')
});
´´´








# Ciclo de vida en los Web Components

Diversos estados que pueden tener los Custom Elements a lo largo de su existencia.

Esta operacion se realiza por medio de lo que se le conoce como funciones "callback" funciones que son declaradas pero que no se ejecutan hasta que pasan ciertas cosas.

Estados:

* Created: Es como su instancia en memoria de javascript.
* Attached: Ocurre cuando un elemento que habia en la memoria de JS se inyecta dentro de un documentom o sea pasa formar parte del DOM.
* Detached: Ocurre cuando un elemento se quita del DOM, desaparece de la pagina.
* Attribute Changed: Ocurre cuando uno de sus atributos cambia de valor.

# Custom Elements

Nos permite hacer nuevos elementos del HTML, realizar funciones personalizadas o presentar informacion de una nueva manera.

´´´
<dw-holamundo></dw-holamundo>
´´´

´´´
<script>
	document.registerElement('dw-holamundo')
</script>
´´´
Tenemos registrado nuestro primer custom element.
´´´
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Primer Custom Element</title>
</head>
<body>
	<h1>Hola Mundo Web Components - Custom Element</h1>
	<p>No aparece nada porque no le hemos asignado ninguna función al Web Component</p>
	
	<!-- Uso mi Web Component -->
	<dw-holamundo></dw-holamundo>

	<script>
		//Registro el componente "dw-holamundo"
		document.registerElement('dw-holamundo');
	</script>
</body>
</html>
´´´





