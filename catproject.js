// console.log("hello")
var counterId = document.getElementById('counter')
var catClicks = document.getElementById('cat');
var count = 0
catClicks.addEventListener('click', function(){
	// add counter
	count += 1
	counterId.innerHTML = "Click count: " + count

}, false)