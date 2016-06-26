## Callback
### Example

```javascript

function addToArray (data, array, callback) {
	
	if (!array) {
		callback(new Error('Not exist array'), null)
	
	} else {

		array.push(data)
		callback(null, array)
	}
}

var array = [1, 2, 3];

addToArray(4, array, function (err) {
	if (err) return console.log(err.message);
	console.log(array)
})

// [1, 2, 3, 4]

---

function addToArray (data, array, callback) {
	
	if (!array) {

		return callback(new Error('Not exist array'), null)
	}

	setTimeout(function () {

		array.push(data)
		callback(null, array)
	}, 1000)
}

var array =  [1, 2, 3];

addToArray(4, array, function (err) {
	if (err) return console.log(err.message)
	console.log(array)
})

// (1 sec for delay) -> [1, 2, 3, 4]


```

If you did not have a callback function
```javascript
function addToArray (data, array) {
	
	setTimeout(function () {
		array.push(data)
	}, 1000)
}

// And execute

var array = [1, 2, 3];
addToArray(4, array)
console.log(array)
// [1, 2, 3]

```
## Promises

### Native Promises ES2015

```javascript

function addToArray (data, array) {
	
	const promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			array.push(data)
			resolve(array);
		}, 1000);

		if (!array) {
			reject(new Error('Not exist array'))
		}
	})

	return promise;
}


// And execute
const array = [1, 2, 3];

addToArray(4, array).then(function () {
	console.log(array);
})

// Callback hell

const array = [1, 2, 3];

// Nest promises

addToArray(4, array)
	.then(function () { return addToArray(5, array) })
	.then(function () { return addToArray(6, array) })
	.then(function () { return addToArray(7, array) })
	.then(function () { return addToArray(8, array) })
	.then(function () {
		console.log(array)
	})

	// (4, next delay) -> [1, 2, 3, 4, 5 ,6 ,7, 8]
```

### Instead of
```javascript
var array = [1, 2, 3];

addToArray(4, array, function (err) {  
  	if (err) ...
  	addToArray(5, array, function (err) {
    	if (err) ...
    	addToArray(6, array, function (err) {
      			if (err) ...
      			addToArray(7, array, function () {
        		// To infinity and beyond
      		})
    	})
  	})
});

```
## catch 
```javascript
const = array = '';
addToArray(4, array)
	.then(...)
	.then(...)
	.then(...)
	.catch(err => console.log(err.message))
	// Not exist array
```

## Async/Await

Not avalaible for ES6 o ES2015, only ES7 p ES2016. But, we can use Babel and plugin preset stage-3

```javascript
async function myFunction () {
	try {
		var result = await functionAsync ()
	} catch (err) {
		...
	}
} 
```

### combine async/await and Promeses
```javascript

function addToArray (data, array) {
	
	const promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			array.push(data);
			resolve(array)
		}, 1000)
	})

	if (!array) {
		reject(new Error('Not exist a array'))
	}

	return promise;
}

const array = [1, 2, 3];

async function processData (data, array) {
	
	try {
		const result = await addToArray(data, array);
		console.log(result) 

	} catch (err) {
		return console.log(err.message)
	}
}

// And exscute
processData(4, array)
// [1, 2, 3, 4]
processData(5, array)
// [1, 2, 3, 4, 5]
processData(6, array)
// [1, 2, 3, 4, 5, 6]

```

By //carlosazaustre.es