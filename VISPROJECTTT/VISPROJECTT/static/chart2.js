/// Pie Chart for Proportion of Weekly Sales by Holiday vs. Non-Holiday
function fetchDataAndUpdateTable2() {
    fetch('/get-data2')
        .then(response => response.json())
        .then(data => {
            updateDataTable2(data);
        })
        .catch(error => console.error('Error:', error))
}

function updateDataTable2(data) {
    console.log(data);

    am5.ready(function () {
        var root = am5.Root.new("chartdiv2");

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          
          
          // Create chart
          // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
          var chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: am5.percent(50)
          }));
          
          
          // Create series
          // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
          var series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            alignLabels: false
          }));
          
          series.labels.template.setAll({
            textType: "circular",
            centerX: 0,
            centerY: 0,
            fill: am5.color("#FFFFFF")

          });
          
          
          // Set data
          series.data.setAll(data)
          // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        //   series.data.setAll([
        //     { value: 10, category: "One" },
        //     { value: 9, category: "Two" },
        //     { value: 6, category: "Three" },
        //     { value: 5, category: "Four" },
        //     { value: 4, category: "Five" },
        //     { value: 3, category: "Six" },
        //     { value: 1, category: "Seven" },
        //   ]);
          
          
          // Create legend
          // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
          var legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 15,
            marginBottom: 15,
          }));
          
          legend.data.setAll(series.dataItems);

          legend.labels.template.set("fill", am5.color("#ffffff"));
          

          // Play initial series animation
          // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
          series.appear(1000, 100);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    fetchDataAndUpdateTable2();
});