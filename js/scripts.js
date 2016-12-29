var a = prompt('Podaj  liczbę a');
var b = prompt('Podaj  liczbę b');
var value = ( a * a ) + ( 2 * a * b ) - ( b * b );

if (value > 0) {
	alert('Wynik równania jest dodatni');
	console.log('Wynik równania jest dodatni');
} else if (value < 0) {
	alert('Wynik równania jest ujemny');
	console.log('Wynik równania jest ujemny');
} else {
	alert('Wynik równania jest równy 0');
	console.log('Wynik równania jest równy 0');
}
