---
templateKey: blog-post
title: Introduction to JavaScript
date: 2020-08-23T10:38:13.438Z
author: CodeCell - Manasi, Amogh
description: Dive into the world of JavaScript.
featuredpost: false
featuredimage: /img/js_light-blue.png
tags:
  - Javascript
  - HTML
  - DOM
---

![](/img/js.jpg "Js image")

- ### **What is Javascript? How to use it?**

JavaScript is the programming language of HTML and the web. It is easy to learn. JavaScript is used to program the behavior of web pages. JavaScript is also used in many desktop and server programs. Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language.

JavaScript can change HTML contents, attribute values, styles(CSS), display status etc. It is free to use and it need not be downloaded as JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.

You can place any number of scripts in an HTML document. Scripts can be placed in the "body", or in the "head" section of an HTML page, or in both.

**Example 1:**

```html
<html>
  <head>
    <script>
      function abc() {
        document.getElementById("one").innerHTML = "Paragraph Changed";
      }
    </script>
  </head>
  <body>
    <h2>Javascript in head</h2>
    <p id="one">A Paragraph</p>
    <button type="button" onclick="abc()">TRY THIS</button>
  </body>
</html>
```

**Example 2:**

```html
<html>
  <body>
    <h2>A Web Page</h2>
    <p id="one">A Paragraph</p>
    <button type="button" onclick="abc()">TRY THIS</button>

    <script>
      function abc() {
        document.getElementById("one").innerHTML = "Paragraph Changed";
      }
    </script>
  </body>
</html>
```

**Example 3:**

Also, we can have an external JavaScript file with extension “.js”.

```
<script src="myScript.js"></script>
```

- ### Is Java and JavaScript same or related?

JavaScript is a lightweight programming language(“scripting language”) and used to make web pages interactive. It can insert dynamic text into HTML. It is also known as browser’s language. JavaScript(JS) is not similar or related to Java. Java is an object-oriented programming language and have virtual machine platform that allows you to create compiled programs that run on nearly every platform.Both the languages have a C like a syntax and are widely used in client-side Web applications, but there are few similarities only.

- #### JavaScript syntax

JavaScript syntax includes literals, variables, operators, keywords, expressions, comments and identifiers. JavaScript programs consists of JavaScript statements which end with semicolon. Semicolons separate JavaScript statements. It is case-sensitive. JavaScript comments can be used to explain JavaScript code, and to make it more readable. Any line that starts with either // (single-line texts) or starts with / _and ends with_ / (multi-line texts) will not be executed.

There are various methods , data types, loops to explore. It is an OOP scripting language hence we also can work with objects and classes along with functions.

- #### JS – Client side v/s Server side

These terms specify where the application is running. Client side refers to the running of code on the browsers, and here we can make changes to the UI to interact with the webpage. Server side JavaScript enables "Backend access" i.e databases, files, etc. This means that we can run JS on local resources of the machine. A good example of this is Node.js.

Most of the internet is based on this Client-server model

- #### Various frameworks

A JavaScript framework is an application framework written in JavaScript.
Here are some famous JS frameworks:

**1.** **Angular**:

It is one of the most powerful, efficient, and open-source JavaScript frameworks. It was originally developed in 2009 by Misko Hevery and Adam Abrons. It is now maintained by Google.

It is described as : AngularJS is a structural framework for dynamic web applications. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application components clearly and succinctly. Its data binding and dependency injection eliminate much of the code you currently have to write. And it all happens within the browser, making it an ideal partner with any server technology.

**2.** **React**:

It is created by Facebook and the framework has earned popularity within a short period. React is a library for building composable user interfaces, it supports and encourages the creation of reusable UI components, which presents data that changes over time by using declarative syntax.

One of the selling points of React is that it can also render on the server using Node. It can power native apps using its framework called React Native. It implements one-way reactive data flow, which reduces the boilerplate making its comprehension easier than traditional data binding.

**3.** **Vue:**

Vue.js is a library for building interactive web interfaces. The goal of Vue.js is to provide the benefits of reactive data binding and composable view components with an API that is as simple as possible**.**

Vue.js itself is not a full-blown framework - it is focused on the view layer only. It is therefore very easy to pick up and to integrate with other libraries or existing projects. On the other hand, when used in combination with proper tooling and supporting libraries, Vue.js is also perfectly capable of powering sophisticated Single-Page Applications.

**4.** **Ember.js**

**5.** **Meteor**

**6. Mithril**

**7. Polymer**

**8. Aurelia**

**9. Backbone.js**
