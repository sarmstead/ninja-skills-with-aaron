# Printable
## The Challenge
The only reference which can be used are JavaScript API docs. Reading about recursion is fine but don't go looking at other similar tree algorithms. Try to do the logic part yourself.

Using JavaScript, write a function that accepts an HTML string and `console.log`'s the id of every element containing an attribute called `"hello"` with a value `"world"` (`hello="world"`). The order of the printed ids does not matter.

Do not use jQuery or any other external library. Also, no xml selectors including xpath. Also, no using any array looping methods like map, filter, forEach, indexOf.

### Do this problem in two different ways:
1. Using while loops, for loops, or a combination of both
1. Using only recursion (no loops)

One more thing: One of these two solutions must not use `nextElementSibling`, `nextSibling`, `previousElementSibling` or `previousSibling`

**Extra credit:** some other way of your choice. There are no rules other than it must come from your brain.


### Example HTML
```html
<html>
  <head><title>I Didn't Use AI</title>
  <body>
    <div>
      <p id="p1" hello="world">a paragraph <span id="s1" hello="world">a spanerriffic spanny span</span></p>
    </div>
    <h1 id="heading1" hello="world">A HEADING<H1>
  </body>
</html>
```

The output of this HTML would be:
```bash
p1
s1
heading1
```

Remember that order does not matter.

Use your favorite coding tool. Personally, I ([Aaron](https://github.com/Randonee)) will use one file and start with the following.

```html
<html>
  <head><title>Brain food</title></head>
  <body>
    <script>
      const html = `<html><head><title>I Didn/'t Use AI</title><body><div><p id="p1" hello="world">a paragraph <span id="s1" hello="world">some spanerific spanny span</span></p></div><h1 id="heading1" hello="world">A HEADING</h1></body></html>`;

      function doTheThing(htmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/HTML");
      }

      doTheThing(HTML);
    </script>
  </body>
</html>
```
