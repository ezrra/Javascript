var Complex = require('./complex');

addComplex = function (ca, cb) {
    return new Complex(ca.r + cb.r, ca.i + cb.i);
}

var math = {
    add: function (a, b) {
        if (a instanceof Complex || b instanceof Complex) {
            return addComplex(new Complex(a), new Complex(b));
        }
        return a + b;
    }
}

module.exports = math;