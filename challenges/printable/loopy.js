const printIds = html => {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html")
  const targetElements = document.querySelectorAll("h1[hello=world]")
  for (let i = 0; i <= targetElements.length; i++) {
    console.log({"loopy": targetElements[i].id})
  }
};
