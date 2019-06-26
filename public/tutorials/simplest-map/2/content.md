# Projections
After the initial SVG introduction we need to talk about projections. 

Projections are just math. And what they do is transform latitude and longitude coordinates to x and y coordinates on your screen. 
Learn more about projections here.

And if you want to dive into the math, go over here.

We take a closer look into projections later on in the course, but we need them to create a real map. 

`var projection = d3.geoAlbers();`
Now we have a projection function we can call with an array of coordinates.
`projection([3.4, 52.3]`
One important thing to remember is that in d3 we call projections With `[latitude, longitude]`. Read more about the way different libraries handle it here.
The result of this call is an array of x,y coordinates. 
`[300,400]` or `[x,y]`
If we don‘t provide more information to the projection function you won‘t see a thing on the screen. Because the defaults for projections are:

We got some X, Y coordinates as output, but theres something missing: the projection has no knowledge of the size or extent of our SVG element. Naturally, if our SVG image was of size 300x400, every single coordinate in the above example would fall off the image, and not be seen.

We can change these with the methods `scale` `center` and `translate`

With these parameters we change the “zoom“  of the map.
If we wanted to zoom to say Berlin to see the whole city we would use the following parameter. 

