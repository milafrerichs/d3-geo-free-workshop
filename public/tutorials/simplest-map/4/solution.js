var svg = d3.select("body").append("svg")
.attr("width",100)
.attr("height", 100);
svg
  .append('circle')
  .attr('cx', 5)
  .attr('cy', 5)
  .attr('r',5)
  .attr('fill','red');
