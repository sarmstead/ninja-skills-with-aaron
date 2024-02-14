const printIds = html => {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");
  const targetElements = Array.from(document.querySelectorAll("h1[hello=world]"));
  const output = [];
  for (let i = 0; i <= targetElements.length; i++) {
    if (!targetElements[i]) {
      continue;
    }

    output.push(targetElements[i].id);
  };

  const stringifiedOutput = output.join("\n");
  console.log(stringifiedOutput);
  return stringifiedOutput;
};
