var simbolos = null;
var numeros = 0;

function resta(){
	simbolos = "-";
	imprimir_simbolo();
}

function suma(){
	simbolos = "+";
	imprimir_simbolo();
}

function multiplicar(){
	simbolos = "x";
	imprimir_simbolo();
}

function dividir(){
	simbolos = "/";
	imprimir_simbolo();
}

function porcentaje(){
	simbolos = "%";
	imprimir_simbolo();
}

function igual(){
//CONVIERTO LOS NUMEROS DE LA OPERACION SOLICITADA EN ENTEROS.
var guardaNum1 = 0;
var guardarSimbolo = "";
var guardaNum2 = 0;
var resultado = 0;

guardaNum1 = parseInt(document.getElementById("pantalla").innerHTML);
guardarSimbolo = document.getElementById("panta").innerHTML;
guardaNum2 = parseInt(document.getElementById("pantallita").innerHTML);
	console.log(guardaNum1);
	
	if (isNaN(guardaNum1) || isNaN(guardaNum2)) {
		resultado= "Error";
	}else{

	if (guardarSimbolo == "+") {
		resultado =guardaNum1+guardaNum2;
	}

	if (guardarSimbolo == "-") {
		resultado =guardaNum1-guardaNum2;
	}

	if (guardarSimbolo == "x") {
		resultado =guardaNum1*guardaNum2;
	}

	if (guardarSimbolo == "/") {
		resultado =guardaNum1/guardaNum2;
	}

	if (guardarSimbolo == "%") {
		resultado =(guardaNum1*guardaNum2)/100;
	}
}

borrar();
document.getElementById("pantalla").innerHTML = resultado;
}

//CONVERTIR NUMERO  A BINARIOS.
function binarios(){
	var bin = 0;
	var bin2 ="";
	var contador = 0;

	guardanum = parseInt(document.getElementById("pantalla").innerHTML);
	

	while(guardanum>1){
		bin = guardanum%2;
		bin = parseInt(bin);

		bin2 = bin+""+bin2;
		guardanum = guardanum/2;
	}
	borrar();
	document.getElementById("pantalla").innerHTML += bin2;
}

function negativo(){
	numeros = "-";
	imprimir();
}

//NUMEROS
function uno(){
	numeros = 1;
	if (simbolos==null) {
		imprimir();
	}else{
		imprimir_pantallita();
	}
}

function dos(){
	numeros= 2;
	if (simbolos==null) {
		imprimir();
	}else{
		imprimir_pantallita();
	}
}

function tres(){
	numeros = 3;
	if (simbolos==null) {
		imprimir();
	}else{
		imprimir_pantallita();
	}
}

function cuatro(){
	numeros = 4;
	if (simbolos==null) {
		imprimir();
	}else{
		imprimir_pantallita();
	}
}

function cinco(){
	numeros = 5;
	if (simbolos==null){
		imprimir();
	}else{
		imprimir_pantallita();
	}
}

function seis(){
	numeros = 6;
	if (simbolos==null) {
		imprimir();
	}else{
		imprimir_pantallita();
	}
}

function siete(){
	numeros = 7;
	if (simbolos==null) {
		imprimir();
	}else{
		imprimir_pantallita();
	}
}

function ocho(){
	numeros = 8;
	if (simbolos==null) {
		imprimir();
	}else{
		imprimir_pantallita();
	}
}

function nueve(){
	numeros = 9;
	if (simbolos==null) {
		imprimir();
	}else{
		imprimir_pantallita();
	}
}

function cero(){
	numeros = 0;
	if (simbolos==null) {
		imprimir();
	}else{
		imprimir_pantallita();
	}
}

// FUNCIONES PARA NUMEROS Y SIMBOLOS 
function imprimir(){
	document.getElementById("pantalla").innerHTML += numeros;
}

function imprimir_pantallita(){
	document.getElementById("pantallita").innerHTML += numeros;
}

function imprimir_simbolo(){
	document.getElementById("panta").innerHTML = simbolos;
}

function borrar(){
	document.getElementById("pantalla").innerHTML = "";
	document.getElementById("pantallita").innerHTML = "";
	document.getElementById("panta").innerHTML = "";
	simbolos = null;
	numeros = 0;
}