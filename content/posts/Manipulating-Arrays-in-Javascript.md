---
title: Manipulating Arrays in Javascript
date: 2020-12-12
published: true
tags: ["javascript", "codenewbie", "beginners"]
canonical_url: false
description: "In this article, I will be explaining or showing you the difference between the pop(), push(), shift(), unshift(), splice(), and slice() array methods in Javascript, though some might look similar they all serve different purposes, a big question should be where do we use these methods?"
---

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/26p3f4jjqqk1fk4bj16z.jpg)

In this article, I will be explaining or showing you the difference between the pop(), push(), shift(), unshift(), splice() and slice() array methods in Javascript, though some might look similar they all serve different purposes, a big question should be where do we use these methods?

Good, we make use of these methods in arrays.

## Array

According to [GeeksforGeeks](https://www.geeksforgeeks.org/arrays-in-javascript/),

> In JavaScript, an array is a single variable that is used to store
> different elements. It is often used when we want to store a list of
> elements and access them by a single variable.

**Example:**

    var friends = ["Joel", Elijah", "John", "Precious", "Happiness", "Silas" ];

Before I forget pop(), push(), shift(), unshift(), splice() and slice() are all **array methods**. we have so many array methods, such as indexOf(), filter(), find(), e.t.c.

_Back to business, I will be explaining each of them very briefly with the aid of some examples._

## pop( )

The pop() method is used to remove the last element of an array, and return that element not minding the type of that element; it could be a number, string, boolean, e.t.c.

> **Note:** It does not take in any parameter and it changes the length of an array.

**Syntax**

    array.pop()

**Example:**

    var friends = ["Joel", Elijah", "John", "Precious", "Happiness", "Silas" ];
    friends.pop(); // this will remove Silas from the array.

_Then you may begin to ask yourself if the pop() method removes only the last element of an array, how can I remove the first element of an array?_

To remove the first element of an array, use the **shift()** method.

## shift( )

The shift() method is used to remove the first element of an array, and return that element not minding the type of that element; it could be a number, string, boolean, e.t.c.

> **Note:** It does not take in any parameter and it changes the length of an array.

**Syntax**

    array.shift()

**Example:**

    var friends = ["Joel", Elijah", "John", "Precious", "Happiness", "Silas" ];
    friends.shift(); // this will remove Joel from the array.

_Another question that might come to your mind is: how can I remove elements in the middle of an array or at any other position of an array?_

For this we can make use of either splice() or slice() method, I will explain them so you can know their functions and differences.

## splice( )

The splice() method is used to add items to an array or to remove items from an array, and return the removed item(s).

> **Note:** It takes in 4 parameters of which 3 are optional and it changes the length of an array.

**Syntax**

    array.splice(index, howmany, item1, .....,itemX)

`index` is required as it specifies the position to add or remove items.

> **Note:** The index is usually excluded from the items removed.

`howmany` is optional, it determines the number of items to be removed. If set to 0, no items will be removed.
`item1, ..., itemX` are optional, they are the new item(s) to be added to the array.
**Example:**

    var friends = ["Joel", Elijah", "John", "Precious", "Happiness", "Silas" ];
    friends.splice(2, 2, "Agnes", "Judith" ); // this will replace precious and happiness with agnes and judith.

You can decide not to replace it with anything

    friends.splice(2,2);

You can assign the removed item to a variable too and also do other stuff.

## slice( )

The slice() method returns the selected elements in an array to a new array, leaving the array it is called upon untouched. It takes in 2 parameters.

> **Note:** The original array does not get touched

**Syntax**

    var newArray = array.slice(start, end)

`start` is where extraction/removal begins
`end` is the index at which the removal will stop but the end index will be **excluded**

**Example:**

    var friends = ["Joel", Elijah", "John", "Precious", "Happiness", "Silas" ];
    var newArray = friends.slice(1,3); // this will copy Elijah and John to newArray.

> Finally, I will explain the push() and unshift() array methods which
> are used to add to the array either at the beginning or end of the
> array.they are just direct opposite of the pop() and shift() array
> method.

## push( )

The push() method is used to adds new items to the end of an array and return the new length.

> **Note:** It changes the length of an array.

**Syntax**

    array.push(item1, ..., itemx)

**Example:**

    var friends = ["Joel", Elijah", "John"];
    friends.push( "Precious", "Happiness"); // this will add Precious and Happiness to the end of the array.

_Since the push method adds elements/items to the to an array, the next question would be how can I add items to the beginning of an array?_

To add element(s) to the beginning of an array, use the **unshift()** method.

## unshift( )

The unshift() method is used to adds new items to the beginning of an array and return the new length.

> **Note:** It changes the length of an array.

**Syntax**

    array.unshift(item1, ..., itemx)

**Example:**

    var friends = ["Joel", Elijah", "John"];
    friends.unshift( "Precious", "Happiness"); // this will add Precious and Happiness to the beginning of the array.

Thanks so much for reading!. Connect with me on [twitter](https://twitter.com/olawanle_joel)

## Useful Resources

- [Array Methods](https://www.w3schools.com/jsref/jsref_obj_array.asp)
- [Arrays in JavaScript](https://www.geeksforgeeks.org/arrays-in-javascript/)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
