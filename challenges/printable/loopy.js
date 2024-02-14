// Using JavaScript, write a function that accepts an HTML string
// and `console.log`'s the id of every element containing an attribute
// called `"hello"` with a value `"world"` (`hello="world"`).
// The order of the printed ids does not matter.

// Pseudocode
// - Get the HTML as a string
// - Loop through the string --> find where attr is `hello` and `hello` = `bar`


const fs = require("node:fs");

const html = fs.readFileSync("./index.html", "utf8")
