**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

**Answer:**
**getElementById():** Returns one element using its ID. Since IDs should be unique, it returns just one element. It's the fastest way.
*Example:* Selecting an element with ID "myDiv"
`document.getElementById("myDiv")`

**getElementsByClassName():** Returns all elements having a specific class name. It returns a "live" list, so if you append some more elements with that class, they'll be added to the list automatically.
*Example:* Selecting elements with class "box"
`document.getElementsByClassName("box")`

**querySelector():** Uses CSS selector syntax to find the first element that matches it. You can use any CSS selector like classes, IDs, or attributes.
*Example:* Selecting the first element with class "box"
`document.querySelector(".box")`

**querySelectorAll():** Similar to querySelector but returns all matching elements as a "static" node list (it won't automatically update).
*Example:* Selecting all elements with class "box"
`document.querySelectorAll(".box")`

---

**2. How do you create and insert a new element into the DOM?**

**Answer:**

1. Create the element by using `document.createElement()`
2. Set its properties like text, classes, or attributes.
3. Insert it into the DOM using methods like `appendChild()`, `insertBefore()`, or `insertAdjacentHTML()`

*Example:*
Creating a new paragraph and adding it to a div with ID "container"
`let p = document.createElement("p");`
`p.textContent = "Hello World";`
`document.getElementById("container").appendChild(p);`

---

**3. What is Event Bubbling and how does it work?**

**Answer:**
Event bubbling is how browsers handle events. When an event happens to an element (a click, for example), it first triggers handlers on that element, next on its parent, then to the document root.

*Think of a bubble rising in water - the event "bubbles up" from the target element to its ancestors."

*Example:*
Clicking a button inside a div triggers both the button's click handler and the div's click handler.

---

**4. What is Event Delegation in JavaScript? Why is it useful?**

**Answer:**
Event delegation is a technique where we have one event listener on a **parent element** instead of numerous listeners on each child element. This is feasible because events bubble up from children to parents.

**Why it's useful:**

* Better performance (fewer event listeners)
* Works for dynamically added elements
* Less memory usage
* Cleaner, easier-to-maintain code

*Example:*
Listening for clicks on any button inside a container
`document.getElementById("container").addEventListener("click", function(e){ if(e.target.tagName === "BUTTON"){ alert("Button clicked!"); } });`

---

**5. What is the difference between preventDefault() and stopPropagation() methods?**

**Answer:**
**preventDefault():** Stops the default browser action for an event. For example, preventing a link from navigating or a form from submitting. It **does not stop the event from bubbling**.

**stopPropagation():** Prevents the event from propagating up to parent elements. Other event handlers within the same element continue to run. It **does not stop the browser's default action**.


*Example:*

* Prevent a link from navigating:
  `link.addEventListener("click", function(e){ e.preventDefault(); });`
* Stop a click from bubbling to parent:
  `button.addEventListener("click", function(e){ e.stopPropagation(); });`

---
