var mCount = 0;
var totalBytes = 0;
var cities = [];
var socket = io.connect('http://localhost:9001'); // connect client to the server
socket.on('data', function(data) {
	var mCount = 0;
	// $('#debug_locData').html('');
	// $('#debug_ipArray').html('');
	// var dataArray = data;
	// $.each(data, function(k, v) {
	// 	console.log(dataArray);
	// });
	//mountain view count
	console.log(data);
	var random = Math.floor(Math.random()*50);
	$.each(data.locData, function(k ,v) {
		if($.inArray(v.city, cities) === -1) {
			cities.push(v.city);
		}
		if(v.city == 'Mountain View') {
			console.log('hit!');
		mCount++;
		$('#result').html(totalBytes);
	}
	});
	totalBytes += mCount*random;
});

function printcities() {
}