
$(document).ready(function () {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		var results = xhttp.responseText;//JSON.stringify({xhttp.responseText});
		console.log(results)
		//$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
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
	    //});
		}
	};
	xhttp.open("GET", "https://raw.githubusercontent.com/Ronin11/AI/master/data/data.txt", true);
	xhttp.send();
});


