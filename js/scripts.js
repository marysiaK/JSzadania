function rysujChoinke(wiersz){
	for ( var i = 0 ; i < wiersz ; i++) {
	var star= ' ';
	for (var j = 0; j < i * 2 - 1; j++) {
	star += '*';
        }
        console.log(star);
	}
}
rysujChoinke(5);