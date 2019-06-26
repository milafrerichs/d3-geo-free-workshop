# Creating and changing elements the D3 way

## Selection
> Selections allow powerful data-driven transformation of the document object model (DOM): set attributes, styles, properties, HTML or text content, and more. 

> Selection methods typically return the current selection, or a new selection, allowing the concise application of multiple operations on a given selection via method chaining. 

Let's select the body of the page:

`d3.select('body')`

## Append

## Changing attributes

Let's look at the attributes for SVG elementsd and how to change them.
D3 makes it very easy to access them and to change them.
The function is called attr() and it takes two parameters.
The first is the name of the attribute we want to change.
The second is either a value (String, Number, etc) or a function.
I'll explain the function later on in this example.
Let's look at the simplest way to change attributes:
