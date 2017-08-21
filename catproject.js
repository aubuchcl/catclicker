// // console.log("hello")
// var counterId = document.getElementById('counter');
// var catClicks = document.getElementById('cat');
// var count = 0;
// catClicks.addEventListener('click', function(){
// 	// add counter
// 	count += 1;
// 	counterId.innerHTML = "Click count: " + count;

// }, false);

// var counterId2 = document.getElementById('counter2');
// var catClicks2 = document.getElementById('cat2');
// var count2 = 0;
// catClicks2.addEventListener('click', function(){
// 	// add counter
// 	count2 += 1;
// 	counterId2.innerHTML = "Click count: " + count2;

// }, false);

var catPics = ['cat.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg']

for(var i = 0; i < catPics.length; i++){
	var cat = catPics[i];


	var figHolder = document.createElement('figure')
	// make the count p element and cat img element
	var catElement = document.createElement('img');
	var countElement = document.createElement('figcatption');
	document.body.appendChild(figHolder)
	figHolder.appendChild(catElement)
	figHolder.appendChild(countElement)

	//strip off file name and use it as id
	var catNoExtension = cat.substring(0, cat.indexOf('.'));

	// set id to newly created img element and then set src
	catElement.id = catNoExtension;
	catElement.src = cat;

	// countElement id
	// countElement.id = "count"+i

	// var count = 0
	// catElement.addEventListener('click', (function(numId){
	// 	return function(){
	// 		console.log(numId)
	// 		console.log(count)
	// 		count += 1
	// 		var x = document.getElementById("count"+numId)
	// 		console.log(x)
	// 		x.innerHTML = "count" + count


	// 	};
	// })(i));


	countElement.id = "count"+i

	var count = 0
	catElement.addEventListener('click', (function(numCount, numId){
		return function(){
			console.log(numId)
			console.log(numCount)
			numCount += 1
			var x = document.getElementById("count"+numId)
			console.log(x)
			x.innerHTML = "count" + numCount


		};
	})(count, i));



}











