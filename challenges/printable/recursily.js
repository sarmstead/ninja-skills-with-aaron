const printIdsRecursively = async html => {
  let targetElements
  if (await !Array.isArray(html)) {
    const parser = new DOMParser();
    const document = parser.parseFromString(html, "text/html")
    targetElements = Array.from(document.querySelectorAll("h1[hello=world]"))
  } else {
    targetElements = html
  }

  if (targetElements.length === 0) {
    console.log("Recursion complete. ✅")
  } else {
    console.log({"recursily": targetElements.at(-1).id})
    targetElements.pop()
    printIdsRecursively(targetElements)
  }
};
