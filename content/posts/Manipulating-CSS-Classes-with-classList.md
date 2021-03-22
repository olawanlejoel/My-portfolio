---
title: Manipulating CSS Classes with classList - DOM
date: 2020-12-26
published: true
tags: ["javascript", "css", "html"]
canonical_url: false
description: "In this article, you will learn how to use the JavaScript classList property to work with the CSS classes of an element by either removing, adding, toggling, or checking if a class exists in an element."
---

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0ishfcis7ld12qk03jp3.jpg)

In this article, you will learn how to use the JavaScript `classList` property to work with the CSS classes of an element by either removing, adding, toggling, or checking if a class exists in an element. This is something we often use when building the frontend of web applications.

Previously, almost everyone relied on jQuery to perform these kinds of DOM manipulations, but it never made sense importing a whole jQuery library just to perform little DOM manipulation.

## What is the classList property?

The `classList` is a read-only property of an element that returns a collection of CSS classes and allows us to make use of some methods as well for managing and updating those classes.

**Example:**
If we have a `p` tag element with class `short-note` and `paragraph`

```html
<p class="short-note paragraph" id="content">
  Lorem ipsum dolor sit amet, consectetur adipisicing el.
</p>
```

we can easily get the list of all the classes contained in the `p` element using the code below

```javascript
let theClasses = document.querySelector("#content");
console.log(theClasses.classList);
```

---

The `classList` property provides a few methods such as:

- **add()** : Adds specified classes
- **remove()** : Removes specified classes
- **contains()** : Checks whether the specified class exists on the element
- **toggle()** : toggles specified class

I will be explaining each of them with an example and then at the end of this article, you will see a **codepen link to a simple sidebar project** of which I made use of the classList property.

### add()

To add one or more CSS classes to the class list of an element, you use the `add()` method of the `classList`.

**Example:**
The following code adds the `show` class to the class list of the `div` element with the id `content`:

```javascript
let div = document.querySelector("#content");
div.classList.add("show");
```

we can also add multiple CSS classes to the class list of an element:

```javascript
let div = document.querySelector("#content");
div.classList.add("show", "remove", "flow");
```

### remove()

To remove one or more CSS classes from the class list of an element, you use the `remove()` method of the `classList`.

**Example:**
The following code removes the `show` class from the class list of the `div` element with the id `content`:

```javascript
let div = document.querySelector("#content");
div.classList.remove("show");
```

we can also remove multiple CSS classes from the class list of an element:

```javascript
let div = document.querySelector("#content");
div.classList.remove("show", "remove", "flow");
```

### contains()

This method helps us know if a particular class is contained in our element. The `contains()` method returns `true` if the `classList` contains a specified class; otherwise `false`.

**Example:**

```javascript
let div = document.querySelector("#content");
div.classList.contains("show"); // true
```

### toggle()

The `toggle()` method is a very cool method most frontend developers use from time to time as it saves you the whole stress of checking if a class exists then remove or otherwise. The `toggle` method helps us make use of just one line of code instead of about 5 lines of code.

Simply, it checks if the class list of an element contains a specified class name, the toggle() method removes it. If the class list doesn’t contain the class name, the toggle() method adds it to the class list. This is mostly used for hamburger menus.

**Example:**

```javascript
let div = document.querySelector("#content");
div.classList.toggle("visible");
```

There are other methods like:

- **index()** : returns the class at a specified position in the list
- **length** : returns the number of classes

Briefly, we have seen how we could make use of these methods to either add, remove, toggle, or check if a class exists in an element.

---

As I promised [here](https://codepen.io/olawanlejoel/pen/xxVddwq) is a simple sidebar project in which I used these classList methods to either hide the sidebar or show the navbar by wither adding or removing a CSS class.

{% codepen https://codepen.io/olawanlejoel/pen/xxVddwq %}

---

As always, any questions or suggestions, please feel free to leave a response or [tweet me](https://twitter.com/olawanle_joel) 🤭! Be sure to connect with me on socials! 😎
