---
title: Basic Operation for JavaScript Objects
date: 2020-12-24
published: true
tags: ["javascript", "html"]
canonical_url: false
description: "In this article you will learn how to manipulate and access the data within JavaScript objects, using both dot and bracket notation, you will get to know what objects are how to add, modify an object, and many other things."
---

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ufsap4l0l3j58puy444j.jpg)

In this article you will learn how to manipulate and access the data within JavaScript objects, using both dot and bracket notation, you will get to know what objects are how to add, modify an object and many other things.

## Table of Content

- Introduction to Javascript Object
- How to add keys and values to an object
- How to modify an object
- Removing key-value pairs in an object
- Check if keys exist in an object
- Iterate over all keys in an object
- Other useful resources

## Introduction to Javascript Object

According to [Tutorial Teachers](https://www.tutorialsteacher.com/javascript/javascript-object), Object is a non-primitive data type in JavaScript. It is like any other variable, the only difference is that an object holds multiple values in terms of properties and methods. Properties can hold values of primitive data types and methods are functions.

In JavaScript, an object can be created in two ways:

- Object literal
- Object constructor

**Object Literal**

This is an easier means of creating an Object. It makes use of **Curly braces** i.e. { }. _A simple example to illustrate this would be:_

    let user = {
    	name : "Joel",
    	age : 12,
    	class : "Grade 2"
    }

**Object Constructor**
This is another way of creating an object, with this method we need to make use of the `new` keyword. _A simple example to illustrate this would be:_

    let user = new Object();
    user.name = "Joel";
    user.age = 12;
    user.class = "Grade 2";

This is just a very simple example, we can create complex/nested objects too using this same format.

## How to add keys and values to an object

To add key-value pairs to an object we can either make use of the **dot or bracket notation**. It is good for you to know that object is a collection of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys).

**\*Note:** Both the dot notation and bracket notation can be used for any method you use in creating your object.\*

**Dot Notation**

    user.country = "Nigeria";

You can confirm if it's in your array by displaying your array on the console, terminal, or anywhere else.

**Bracket Notation**

    user["country"] = "Nigeria";
    user.friend = "Elijah";

Any method can be used depending on what you prefer but when the key has space in between you can only make use of the bracket notation.

    user["country name"] = "Nigeria" // correct
    user.country name = "Nigeria" // wrong

The same approach also applies to nested arrays also.

## How to modify an object

To modify an object is just like adding an object, just that the key exists before and you are only trying to modify the value.
**_Example_**
We have an object names `user` which has the keys `name, age, class, and country`. In a situation where the previous name supplied was incorrect, all we have to do is modify the object. Assuming `name` is supposed to be "John" instead of "Joel".

    user.name = "John" // for one word key
    user["my name"] = "Joshua" // for more than one word keys

## Removing key-value pairs in an object

Earlier, we have both added to and modified an object's key-value pairs. Here we will see how we can _remove_ a key-value pair from an object.

Its very simple to delete/remove key-value pairs in an object. All you need to do is add the delete keyword in front of the key.

    delete user.name;

## Check if keys exist in an object

JavaScript provides us with two different ways to do this. One uses the `hasOwnProperty()` method and the other uses the `in` keyword.

    user.hasOwnProperty("name");  // returns true
    "name" in user; // returns true

## Iterate over all keys in an object

At some particular times, you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a `for...in` statement. If we had a simple nested object like:

    let users= {
    	Joel : {
    	 name: "Joel",
    	 age : 10
       },
       Elijah: {
    	name: "Elijah",
    	age : 12
       }
    }

To iterate over all user we can use the `for...in` statement.

    for(let user in users){
    	console.log(user);
    } // this will return Joel and Elijah only.

at a point in time, your object might become complicated and you may want to know the keys in an object. The Object.key( ) returns an array with strings representing each property in the object.
_Example_:

    Object.keys(users);

## Conclusion

This should help you understand the basic things you need to know about Javascript Objects. You can read more about objects so could learn how to add arrays, access them, to work with nested object and lots more.

## Other useful resources

- [Tutorial Teacher](https://www.tutorialsteacher.com/javascript/javascript-object)
- [W3Schools](https://www.w3schools.com/js/js_object_definition.asp)
- [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/)

There are many more you could easily search for. **Thanks for reading**.

**p.s:** I'm looking forward to being your friend, let's connect on [twitter](https://twitter.com/olawanle_joel).
