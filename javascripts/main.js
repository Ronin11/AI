$(document).ready(function () {

	//data = JSON.parse($.getJSON('https://raw.githubusercontent.com/Ronin11/AI/master/data/data.json').recievedtext);
	$.getJSON('https://raw.githubusercontent.com/Ronin11/AI/master/data/data.json', function (temp) {
		console.log(temp)
	});
	$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (temp) {
		console.log(temp)
	});
	// Create the chart
	$('#demo').highcharts('StockChart', {

		rangeSelector : {
			selected : 1
		},

		title : {
			text : 'AI Account Value'
		},

		series : [{
			name : 'Value',
			data : data,
			tooltip: {
				valueDecimals: 2
			}
		}]
	});
});
