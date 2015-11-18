var results;

function loadDemo() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		results = xhttp.responseText
		}
	};
	xhttp.open("GET", "https://raw.githubusercontent.com/Ronin11/AI/master/data/data.txt", true);
	xhttp.send();
}

$(document).ready(function () {
		loadDemo();
		console.log(results);
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
			data : results,
			tooltip: {
				valueDecimals: 2
			}
		}]
	});
});


