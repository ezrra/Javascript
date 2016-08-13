// Module Patter

var myModule = (function () {

    var _privateProperty = 10;

    var _privateMethodOne = function () {

        // some
    };

    var _privateMethodTwo = function () {

        _privateMethodOne();
    };

    var publicMethodOne = function () {

        // ..
    };

    var publicMethodTwo = function () {

        // ..
    };

    return {

        publicProperty: "foo",
        publicMethodOne: publicMethodOne,
        publicMethodTwo: publicMethodTwo,
        publicMethodThree: _privateMethodTwo
    }
    
})();