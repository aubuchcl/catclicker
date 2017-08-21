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

	countElement.id = "count"+i

	var count = 0
	catElement.addEventListener('click',
		                       (function(numCount, numId){
		return function(){
			numCount += 1
			var x = document.getElementById("count"+numId)
			x.innerHTML = "This picture has been clicked <em>"
			               + numCount +
			               "</em> times!!!"
		};
	})(count, i));
}











