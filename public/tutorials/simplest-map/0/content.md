# Simplest Map Possible
This first example will show you how to create the most simple map with d3.

## Housekeeping

This tutorial is an interactive one. You now see the result of the lesson on the right.  
In the next lesson you will see a code editor on the top right, below is the result as HTML and a switch to show a console.  
You can edit the code and the HTML will update.  
You can use `console.log` to show results in the console window.  
To write HTML to the results view you need to use `document.body.innerHTML = ` this will replace the whole content. You can use standard Javascript to control the result view.  

## The result
For a simple map we need a few basics. We will cover these basics in this short tutorial.

Since d3 is not a visualization library per se, but a way to control the DOM, the way we see things in the browser we need to use some sort of HTML to show a map. In this course we will typically use SVG but there will be lessons on other ways you can create maps (namely canvas).

The most simplest map I could is just a single point on the map. For points we usually use SVG circles. We can control a lot of things with a circle that‘s why it is perfect for [bubble maps]() and [locator maps]().

On the right you see the result of what we will be producing in this *simple* example.
