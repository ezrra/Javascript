var myModule = (function () {

    var counter = 0;

    return {
        incrementCounter: function ()
        {
            return counter++;
        },
        resetCounter: function ()
        {
            console.log("Clean, count:" + counter);
            counter = 0;
        }
    }
})();

myModule.incrementCounter();

myModule.incrementCounter();

myModule.resetCounter();

/**
 * Other example
 */

var myModule = (function () {

    var privateProperty = 10;

    var privateMethodOne = function () {

        // some
    };

    var privateMethodTwo = function () {

        // some
    };

    return {
        publicProperty: "foo",
        publicMethodOne: function ()
        {
            // some
        },
        publicMethodTwo: function ()
        {
            privateMethodOne();
        },
        publicMethodThree: privateMethodTwo
    }
})();

/**
 * Example by //hardcoders.mx/
 */