google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawAllCharts);

var chartDefaults = {}
function drawAllCharts() {
    // assign chartDefaults here to make sure google libraries are loaded
    chartDefaults = {
        column_chart: {
            class: google.visualization.ColumnChart,
            defaults: {
                width: 1000,
                height: 300,
                legend: 'none',
                colors: ['#ee7d3a', '#d12851'],
                isStacked: true,
                vAxis: {
                    gridlines: {
                        color: '#1d242c'
                    },
                    textStyle: { color: 'white'}
                },
                hAxis: {
                    textStyle: {color: 'white'}
                },
                bar: { width: 10 },
                chartArea: { 'height': '90%' },
                backgroundColor: '#0d141d'
            }
        },
        donut_chart: {
            class: google.visualization.PieChart,
            defaults: {
                width: 200,
                height: 200,
                chartArea: {top: 15, left: 18},
                pieSliceText: 'none',
                pieHole: 0.85,
                backgroundColor: '#0d141d',
                pieSliceBorderColor: 'transparent',
                legend: 'none'
            }
        }
    }

    for (var tagName in chartDefaults) {
        if (chartDefaults.hasOwnProperty(tagName)) {
            var list = document.getElementsByTagName(tagName)
            for (var i = 0; i < list.length; i++) {
                drawChart(tagName, list[i])
            }
        }
    }

}

function drawChart(tagName, element) {
    new chartDefaults[tagName]['class'](element).draw(
        google.visualization.arrayToDataTable(JSON.parse(element.getAttribute("data"))),
        Object.assign({}, // merges options from DOM into defaults for chart type
            chartDefaults[tagName]['defaults'],
            JSON.parse(element.getAttribute("options"))
        )
    )
}
