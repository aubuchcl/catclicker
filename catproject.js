(function kittehClicker() {
    "use strict";
    var catPics = ['cat.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg'];

    for (var i = 0; i < catPics.length; i++) {
        var cat = catPics[i];


        var figHolder = document.createElement('figure');
        // make the count p element and cat img element
        var catElement = document.createElement('img');
        var countElement = document.createElement('figcaption');
        document.body.appendChild(figHolder);
        figHolder.appendChild(catElement);
        figHolder.appendChild(countElement);

        //strip off file name and use it as id
        // set id to newly created img element and then set src
        catElement.id = cat.substring(0, cat.indexOf('.'));
        catElement.src = cat;

        countElement.id = "count" + i;

        var numCount = 0;
        catElement.addEventListener('click',
            (function () {
                var currentEl = i;
                var clicks = 0;
                return function () {
                    clicks += 1
                    var x = document.getElementById("count" + currentEl)
                    x.innerHTML = "This picture has been clicked <em>"
                        + clicks +
                        "</em> times!!!"
                };
            })());
    }
}());
