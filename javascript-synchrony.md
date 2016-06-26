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


//


By //carlosazaustre.es
https://carlosazaustre.es/blog/manejando-la-asincronia-en-javascript/