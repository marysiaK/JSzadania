var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var itemsByTagName = document.getElementsByTagName('li');
	list.innerHTML += '<li>item ' + itemsByTagName.length + '</li>';

	});


