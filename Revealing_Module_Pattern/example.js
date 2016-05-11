// declare public or private properties  at function
// 
var Counter = (function () {

    var counter = 0;

    var privateMethod = function () {

        // some private
    };

    var incrementCounter = function () {

        return counter++;
    };

    var resetCounter = function () {

        console.log("Value: " + counter);

        counter = 0;
    };

    return {

        increment: incrementCounter,
        reset: resetCounter
    }

})();

// invoke some public is necesary use syntax "this"
// Example

var Module = (function () {

    return {

        methodOne: function () {
            // some public
        },
        methodTwo: function () {
            // Invoke public method
            this.methodOne();
        }
    };
});

// Revealing Module Patter

var Module = (function () {

    var methodOne = function () {
        // some
    };

    var methodTwo = function () {

        methodOne();
    };

    return {

        methodOne: methodOne,
        methodTwo: methodTwo
    }
})
