/** bmi.js
*/
"use strict";
console.log("load bmi1.js");
function bmi() {
	console.log("called bmi()");
	var sLengte = document.getElementById("lengte").value;
	console.log("lengte " + sLengte);
	var sGewicht =	document.getElementById("gewicht").value;
	var lengte = parseFloat(sLengte)/100;
	var gewicht = parseFloat(sGewicht);
	var bmi = gewicht / lengte / lengte;
	var veld = document.getElementById("veld");
	veld.innerHTML = "je BMI is: " + bmi.toPrecision(4);
}