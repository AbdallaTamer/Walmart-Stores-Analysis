/// Scatter Plot for Weekly Sales by Temperature and Store
function fetchDataAndUpdateTable3() {
    fetch('/get-data3')
        .then(response => response.json())
        .then(data => {
            updateDataTable3(data);
        })
        .catch(error => console.error('Error:', error));
}

function updateDataTable3(data) {
    console.log(data);

am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv3");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelY: "zoomXY",
      pinchZoomX:true,
      pinchZoomY:true
    }));
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {}),
      labelText: "{valueX.formatNumber('#,###.')}", // Adjust the format and style as needed

    }));
    
    xAxis.children.moveValue(am5.Label.new(root, {
      text: "Temperature",
      x: am5.p50,
      centerX: am5.p50,
      fill: am5.color("#ffffff"), // Set the label text color to white

    }), xAxis.children.length - 1);
    
    // Set the axis labels' text color to white
    xAxis.get("renderer").labels.template.set("fill", am5.color("#ffffff"));


    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        inversed: false
      }),
      tooltip: am5.Tooltip.new(root, {}),
        labelText: "{valueY.formatNumber('#.0')}", // Adjust the format and style as needed

    }));
    
    yAxis.children.moveValue(am5.Label.new(root, {
      rotation: -90,
      text: "Weekly_Sales",
      y: am5.p50,
      centerX: am5.p50,
      fill: am5.color("#ffffff"), // Set the label text color to white

    }), 0);
    

    // Set the axis labels' text color to white
    yAxis.get("renderer").labels.template.set("fill", am5.color("#ffffff"));
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      calculateAggregates: true,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "y",
      valueXField: "x",
      valueField: "value",
      seriesTooltipTarget:"bullet",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[bold]{title}[/]\nWeekly_Sales: {valueY.formatNumber('#.0')}\nTemperature: {valueX.formatNumber('#,###.')}\nStore: {value.formatNumber('#,###.')}"
      })
    }));
    
    series.strokes.template.set("visible", false);
    
    
    // Add bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    var circleTemplate = am5.Template.new({});
    circleTemplate.adapters.add("fill", function(fill, target) {
      var dataItem = target.dataItem;
      if (dataItem) {
        return am5.Color.fromString("#3498db");
      }
      return fill
    });
    series.bullets.push(function() {
      var bulletCircle = am5.Circle.new(root, {
        radius: 1,
        fill: series.get("fill"),
        fillOpacity: 0.8
      }, circleTemplate);
      return am5.Bullet.new(root, {
        sprite: bulletCircle
      });
    });
    
    
    // Add heat rule
    // https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
    series.set("heatRules", [{
      target: circleTemplate,
      min: 3,
      max: 8,
      dataField: "value",
      key: "radius"
    }]);
      
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      snapToSeries: [series]
    }));
    
    
    // Add scrollbars
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    
    chart.set("scrollbarY", am5.Scrollbar.new(root, {
      orientation: "vertical"
    }));
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.data.setAll(data);
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()

}

document.addEventListener('DOMContentLoaded', function () {
    fetchDataAndUpdateTable3();
});