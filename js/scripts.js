var text = 'Papugi kosz� traw�, unosz�c si� nad ziemi� 15 centymetr�w, na czerwonych dywanach.';
var animal= 'Zielone s�onie';
	animal = animal.toUpperCase();

	text = text.replace('Papugi',animal);

console.log(text.substr(0,text.length/2));