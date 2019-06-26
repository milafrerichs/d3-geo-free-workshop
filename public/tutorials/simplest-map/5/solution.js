var width = 400;
var height = 400;
var data = [144.960930,-37.797831];
var projection = d3.geoEqualEarth();
projection.center(data).translate([200,200]);
var svg = d3.select("body").append("svg")
.attr("width",width )
.attr("height", height);
svg
  .append('circle')
  .attr('cx', projection(data)[0])
  .attr('cy', projection(data)[1])
  .attr('r',5)
  .attr('fill','red');
