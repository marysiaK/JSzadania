function getTriangleArea(a, h) {
    	if ( a <= 0 || h <= 0 ) {
	  console.log('Nieprawidłowe dane');
	} else {
	  return a * h / 2;
	}
}

console.log(getTriangleArea(10,6));
var triangle1Area = getTriangleArea(11, 15);
var triangle2Area = getTriangleArea(4, 9);
var triangle3Area = getTriangleArea(0, 0);


console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);