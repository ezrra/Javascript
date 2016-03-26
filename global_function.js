function f1 () {
    return this;
}
f1() === window;

function f2 () {
    "use stric";
    return this;
}

f2() === undefined;