---
title: Sass vs Scss
date: 2020-12-08
published: true
tags: ["css", "html", "sass", "scss"]
canonical_url: false
description: "The major reason Sass was developed was to make writing CSS more efficient and awesome. If you are looking for a preprocessor language to learn, I would strongly recommend Sass. Why Sass?"
---

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1d8d98zzj9tzmsu0nzrn.jpg)

The major reason Sass was developed was to make writing CSS more efficient and awesome. If you are looking for a preprocessor language to learn, I would strongly recommend Sass. Why Sass? Read why [here](https://css-tricks.com/sass-vs-less/). Before I proceed to explain the difference between Sass and Scss and which one is more preferable to use, I will first want to explain what Sass is all about.

---

## Sass

**Sass** stands for **S**yntactically **A**wesome **S**tyle **s** heet. Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. It is completely compatible with all versions of CSS. It is free to download and use.

Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.

It allows you to use [variables](https://sass-lang.com/documentation/variables), [nested rules](https://sass-lang.com/documentation/style-rules#nesting), [mixins](https://sass-lang.com/documentation/at-rules/mixin), [functions](https://sass-lang.com/documentation/modules), and more, all with a fully CSS-compatible syntax.

**_Sass has two syntaxes which are Sass and Scss._**

---

## Sass vs Scss

The most commonly used syntax is known as “SCSS” (for “Sassy CSS”), and it takes the CSS syntax we are used to and gives it the super powers that come with Sass. This means that every valid CSS3 stylesheet is valid SCSS as well. SCSS files use the extension **.scss**. This is really handy as it becomes a lot easier to convert our regular CSS styles to Scss.

```css
/* SCSS */
$primary-color: #3bbfce;
$secondary-color: #ff8700;

.content {
  background-color: $primary-color;
  color: darken($secondary-color, 9%);
}
```

The second syntax(older syntax) is Sass which was created to make CSS a bit more awesome and writing of CSS codes more efficient by taking away the use of **curly-braces & semi-colons**, it uses the indentation of lines to specify blocks. Files in the indented syntax use the extension **.sass**.

```css
/* SASS */
$primary-color: #3bbfce
$secondary-color: #ff8700

.content-navigation
  background-color: $primary-color
  color: darken($secondary-color, 9%)
```

With the above explanation, you can properly see the difference between Sass and Scss, the next question would be which one should I learn or which one should I use.

---

The truth is no one should answer that question for you, You should know what best works for you and which one suits your pattern of writing codes.

> For me, I've never loved the Sass syntax because I'm already used to opening curly-braces and making use of semi-colons. And the fact that Scss is always beneficial when working as a team, I just couldn't stop using it.

**But you are the one to make the decision for yourself!**

You might want to learn more about Sass. Please check their [documentation](https://sass-lang.com/guide)!

---

As always, any questions or suggestions, please feel free to leave a response or [tweet me](https://twitter.com/olawanle_joel) 🤭! Be sure to connect with me on socials! 😎
