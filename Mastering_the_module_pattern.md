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

# Private methods.

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

