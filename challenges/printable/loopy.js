// Using JavaScript, write a function that accepts an HTML string
// and `console.log`'s the id of every element containing an attribute
// called `"hello"` with a value `"world"` (`hello="world"`).
// The order of the printed ids does not matter.

// Pseudocode
// - Get the HTML as a string
// - Loop through the string --> find where attr is `hello` and `hello` = `bar`

const printIds = html => {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html")
  const targetElements = document.querySelectorAll("h1[hello=world]")
  for (let i = 0; i <= targetElements.length; i++) {
    console.log({index: targetElements[i].id})
  }
};
