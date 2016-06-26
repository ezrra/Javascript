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

```

// 

By //carlosazaustre.es