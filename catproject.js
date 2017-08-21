// console.log("hello")
var counterId = document.getElementById('counter');
var catClicks = document.getElementById('cat');
var count = 0;
catClicks.addEventListener('click', function(){
	// add counter
	count += 1;
	counterId.innerHTML = "Click count: " + count;

}, false);

var counterId2 = document.getElementById('counter2');
var catClicks2 = document.getElementById('cat2');
var count2 = 0;
catClicks2.addEventListener('click', function(){
	// add counter
	count2 += 1;
	counterId2.innerHTML = "Click count: " + count2;

}, false);