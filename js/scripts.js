var allNames = [];
var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames =allNames.concat(womensNames, mensNames);

console.log(allNames);

var newName= 'Marian';


if (allNames.indexOf(newName) == -1){
	allNames.push(newName);
} else {
  console.log('imiê ju¿ istnieje');
}


console.log(allNames);