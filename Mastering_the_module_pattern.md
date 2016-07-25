# Creating a Module

```
(function () {
	// code
})()

```
Immediately-Invoked-Function-Expressions

Create new scope and creates privacy
Leaving the other code out of the global scope

After creating new scope we need to namespace our code so that we can access any methiods we return. Let's create a namespace for our anonymous Module.

```
var Module = (function () {
	// Code
})();
```

We then have Module declared in the global scope, which means we can call it wherever we like, and even pass it into another Module.

# Private methods

What are private methods you might be asking? Private methods are anything you don't want users/devs/hackers to be able to see/call outside the scope theyŕe in.
We might be making server calls and posting sensitive data, we don't want to expose those functions publicly, the could post anything back then and take advantage of our code. So we can create closure and be more sensible.

So let's use out newly created Module scope to make our methods inaccessible outside of the scope. For beginners to the Module Pattern, this example will help understand how a private method would be defined.

```
var Module = (function () {
	var privateMethod = function () {
		// do someting
	}; 
})();
```

# Understanding "return"

A real light exmaple of returning an Object with a function as a property:

```
Var Module = (function () {
	return {
		publicMethod: function () {
			// code
		}
	}
})();

```

As we're returning an Object Literal, we can call them exactly like Object Literals:
```
Module.publicMethod()

```
For those who haven't used the Object Literal syntax before, a standard Object Literal could look something like this:

```
var myObjLiteral = {
	defaults: { name: 'Todd' },
	someMethod: function () {
		console.log(this.defaults);
	}
};

// console.log: Object { name: 'Todd' }
myObjLiteral.someMethod();
```

# Anonymous Object Literal return

One of the easiest patterns is the same as we've declared above, the Object has no name declared locally, we just return an Object and that's it:

```
var Module = (function () {
	var privateMethod = function () {};

	return {
		publicMethodOne: function () {
			// I can call privateMethod() you know...
		},
		publicMethodTwo: function () {

		},
		publicMethodThree: function () {

		}
	};
})();
```

# Locally scoped Object Literal

Local scope means a variable/function declared inside a scope. In this sense, it's much easier to see what is public, because they'll have a locally scoped namespace attached:

```
var Module = (function () {
	
	// Locally scope Object
	var myObject = {};
	
	// declared with var must be private
	var privateMethod = function () {};

	myObject.someMethod = function () {
		// take it away Mr. Public Method
	};

	return myObject;
})()
```
You will then see on the last line inside the Module that myObject is returned.
By https://toddmotto.com/mastering-the-module-pattern/









