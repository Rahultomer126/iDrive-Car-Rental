

  //donut pie chart example
  nv.addGraph(function() {
    var chart = nv.models.pieChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .showLabels(true)
        .showLegend(false)
        .color(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"])
        .labelType("percent")
        .donut(true)
        .donutRatio(0.35);

      d3.select("#chartone svg")
          .datum(pieData())
          .transition().duration(350)
          .call(chart);

    return chart;
  });


  //chart example data.
  function pieData() {
    return  [
        {
          "label": "One",
          "value" : 40
        } ,
        {
          "label": "Two",
          "value" : 60
        } ,
        {
          "label": "Three",
          "value" : 25
        } ,
        {
          "label": "Four",
          "value" : 36
        }
      ];
  }
