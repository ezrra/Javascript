// Commond problem
function Engine () {

    this.start = function () {

        return 'Bumm';
    };
}

function Car () {

    this.engine = new Engine();

    this.start = function () {

        return this.engine.start();
    };
}

var car = new Car();

console.log(car.start());

// Fix

function Engine () {

    this.start = function () {

        return 'Bumm';
    };
}

function Car (engine) {

    this.engine = engine;

    this.start = function () {

        return this.engine.start();
    };
}

var engine = new Engine();

var car = new Car(engine);

console.log(car.start()) // Bumm