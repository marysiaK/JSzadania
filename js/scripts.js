
var text = 'Papugi kosza trawe, unoszac sie nad ziemia 15 centymetrow, na czerwonych dywanach.';
var animal= 'Zielone slonie';

var animal= text.toUpperCase();
var textReplace = text.replace('Papugi',animal);
console.log(text.substr(0,text.length/2));

var animal2= 'Czerwone slonie';
var animal2 = animal2.toUpperCase();

var firstWord = text.split(' ',1); 
var text3 = text.replace(firstWord, animal2);
console.log(text.substr(0,text3.length/2));
console.log(text3);