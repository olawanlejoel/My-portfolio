---
title: "Animate website content with JavaScript and CSS"
date: 2020-08-01
published: true
description: This article will explain how to add visual effects or animation to your website content with just 5 lines of JavaScript and a few lines of CSS😎.
---

This article will explain how to add visual effects or animation to your website content with just 5 lines of JavaScript and a few lines of CSS😎.

As we all know that adding visual effects to web pages enhances site beauty and increases the level of interest in your site.

Here is a link - https://codepen.io/olawanlejoel/pen/wvMPXVo to the code in case you are not interested in reading much. But if you are not in a hurry, I will explain everything you need to know.

## Getting Started🎉

The **first thing** we need is the HTML code of what we want to animate. Make sure you add a **class** attribute so we can be able to select it in our JS code.
_For this article I would use this_

```html
<div class="main">
	<h1>This is the title of this div</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
	</p>
</div>
```

**Note:** This code has a class of `main`.

**Secondly**, I would give it a little style so it looks organized.

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: sans-serif;
	display: flex;
	justify-content: center;
	align-content: center;
}

.main {
	height: 380px;
	width: 400px;
	box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.19), 0 0 30px 1px rgba(0, 0, 0, 0.23);
	border-radius: 5px;
	padding: 20px;
}
.main h1 {
	font-size: 20px;
	text-transform: uppercase;
}
.main p {
	margin-top: 30px;
	line-height: 26px;
}
```

Once that is done, we can now proceed to write our Javascript code

**Steps**

-   Create a function
-   Select the class attribute HTML code/item you want to animate
-   Add a class and then call the function.

_Don't let that bore you, here is the code:_

```javascript
function mainAppear() {
	var mainText = document.querySelector(".main");
	mainText.classList.add("main-appear");
}
mainAppear();
```

**Note:** In the JS code we created a new class(`main-appear`) in the same element which we would be styling in the CSS code later.

Once we are done with that, boom🔥🎉, but One more thing, we would need to adjust our CSS code because it's really the guy behind the whole animation 😂.

Add this to the class attribute of the HTML code

```css
opacity: 0;
transform: translateY(100px);
transition: 1s all ease-in-out;
```

And finally, to make everything animate, return them back to normal using the class you created in your JavaScript Code. 😕 I guess you are bored already, but here is the last code.

```css
.main-appear {
	opacity: 1;
	transform: translateY(0px);
}
```

If you can still read on, I will explain everything that just happened properly.

## Code Explanation🔥

### Html Code

That was absolutely very easy to understand. Just bear in mind we made use of a class attribute that contains the stuffs we want to animate.

### CSS code

Generally, aside from the few codes added later, every other CSS codes are the normal styling.

The code we added later just helped us achieve animation after a few seconds.

We added an opacity of 0 to the main class of the stuffs to be animated so it displays nothing at first until the new class is called.

We also added transition of 0.5 seconds to all stuffs in that class and made it happen gently so it doesn't just happen suddenly(so it could look real).

Many other things could be added to enhance the visual effect like :
Transform which we used for this. We made it translate vertically using translateX or horizontally using translateY and set the value of which it would start from.

**The transform property allows you to visually manipulate an element by skewing, rotating, translating, or scaling.**

You can learn more about the transform property [here. ](https://css-tricks.com/almanac/properties/t/transform/)

Cool, we are almost done but we have to reverse everything except the transition in the new class we added in the JavaScript Code.

### Javascript code

Here is the last thing, we would create a function

Call the class of the element we want to animate

Then finally add a new class and then call the function.

**With this, you can add other animations to your website/app by just understanding the concept behind the animation.**

Thanks for reading!

As always, any questions or suggestions, please feel free to leave a response or [tweet me](twitter.com/olawanle_joel)!😎
