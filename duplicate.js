// Unique elements

var fruits = ["1", "2", "2"];
const unique_fruist_second_method = Array.from(new Set(fruits))
// 1, 2

// Replace
// slice

// Convert array to object

const f = ["1", "2"]
const n = { ...f }
// { 0: "1", 1: "2" }

// Fill

const f = new Array(10).fill("1")
// ["1","1","1","1","1","1","1","1","1"]