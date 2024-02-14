const processorForm = document.getElementById("processorForm")
const result = document.getElementById("result")

processorForm.addEventListener("submit", function(event) {
  event.preventDefault()
  const formData = new FormData(processorForm)
  const method = formData.get("process")
  const html = formData.get("code")

  switch (method) {
    case "loop":
      result.innerText = printIds(html);
      break;
    case "recursion":
      result.innerText = "Recursion completed! See console for results."
      printIdsRecursively(html);
      break;
    default:
      throw new Error("Yo hold up. That method ain't recognized.")
  }
})
