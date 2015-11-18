$(document).ready(function () {

	data = JSON.stringify($.getJSON('https://raw.githubusercontent.com/Ronin11/AI/master/data/data.json'));
	console.log(data);
	// Create the chart
	$('#container').highcharts('StockChart', {

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