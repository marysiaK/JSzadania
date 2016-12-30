var text = 'Papugi kosz¹ trawê, unosz¹c siê nad ziemi¹ 15 centymetrów, na czerwonych dywanach.';
var animal= 'Zielone s³onie';
	animal = animal.toUpperCase();

	text = text.replace('Papugi',animal);

console.log(text.substr(0,text.length/2));