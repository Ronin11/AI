$(document).ready(function () {

	//data = JSON.parse($.getJSON('https://raw.githubusercontent.com/Ronin11/AI/master/data/data.json').recievedtext);
	/*$.get("https://raw.githubusercontent.com/Ronin11/AI/master/data/data.json?callback=?", function(data){
  		console.log("callback");
  		data = removeComments(data);
  		console.log(data);
  		console.log(JSON.parse(data));
	});
	data = $.getJSON('https://raw.githubusercontent.com/Ronin11/AI/master/data/data.json');
	//console.log(data);*/
	//console.log(Object.keys(data));
	//console.log(JSON.parse(JSON.stringify(data)));
	//if(data.readyState == 1)
	//	console.log(data.responseText);
	$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
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

	$.get("https://raw.githubusercontent.com/Ronin11/AI/master/data/data.json?callback=?", function(data){
		data = JSON.parse(removeComments(data));
		console.log(data);
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
});

/* 
    This function is loosely based on the one found here:
    http://www.weanswer.it/blog/optimize-css-javascript-remove-comments-php/
*/
function removeComments(str) {
    str = ('__' + str + '__').split('');
    var mode = {
        singleQuote: false,
        doubleQuote: false,
        regex: false,
        blockComment: false,
        lineComment: false,
        condComp: false 
    };
    for (var i = 0, l = str.length; i < l; i++) {
 
        if (mode.regex) {
            if (str[i] === '/' && str[i-1] !== '\\') {
                mode.regex = false;
            }
            continue;
        }
 
        if (mode.singleQuote) {
            if (str[i] === "'" && str[i-1] !== '\\') {
                mode.singleQuote = false;
            }
            continue;
        }
 
        if (mode.doubleQuote) {
            if (str[i] === '"' && str[i-1] !== '\\') {
                mode.doubleQuote = false;
            }
            continue;
        }
 
        if (mode.blockComment) {
            if (str[i] === '*' && str[i+1] === '/') {
                str[i+1] = '';
                mode.blockComment = false;
            }
            str[i] = '';
            continue;
        }
 
        if (mode.lineComment) {
            if (str[i+1] === 'n' || str[i+1] === 'r') {
                mode.lineComment = false;
            }
            str[i] = '';
            continue;
        }
 
        if (mode.condComp) {
            if (str[i-2] === '@' && str[i-1] === '*' && str[i] === '/') {
                mode.condComp = false;
            }
            continue;
        }
 
        mode.doubleQuote = str[i] === '"';
        mode.singleQuote = str[i] === "'";
 
        if (str[i] === '/') {
 
            if (str[i+1] === '*' && str[i+2] === '@') {
                mode.condComp = true;
                continue;
            }
            if (str[i+1] === '*') {
                str[i] = '';
                mode.blockComment = true;
                continue;
            }
            if (str[i+1] === '/') {
                str[i] = '';
                mode.lineComment = true;
                continue;
            }
            mode.regex = true;
 
        }
 
    }
    return str.join('').slice(2, -2);
}