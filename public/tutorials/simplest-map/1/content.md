# SVG Basics

First up we need to learn a little bit about SVG. SVG is the main element we will use in this course to create maps. At the end of the course we will cover more optiosn, but for the most part it will be SVG. You can read more about SVG [here]().

The root SVG element is just a DOM element call `svg`:
```html
<svg width=„400“ height=„400“ />
```

And it can have multiple attributes, but the ones we are interested in the most now are `width` `height` .

## Circle
Let's look at an example for an element, we will use heavily.  
The Circle.  
The circle is a svg element which has standard attributes for x,y called cx and cy and a radius called r.  
The circle is great for point data especially if we want to change the size according to a data point.  
It is way easier to change the radius depending on a attribute as changing the d value of a path.  

We now look at how a circle looks like. 
`<circle r=„3“ cx=„4“ cy=„4“ />`

Interesting for us are these three properties. `r` is the radius of the circle. 
`cx`  is the x position on the screen with in the svg.  `cy`  is the y position. 
In the Browser x,y starts in the op left corner. And as I said the x,y position of a circle element is from within the SVG. So there is another coordinate system within the SVG. That‘s why you can position the SVG element and then within that SVG Element you position the circles with `cx` and `cy` 

Play around with the circle element in the code editor.  Your goal is to show the complete circle. 
