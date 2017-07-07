/*var result = confirm("Deseja excluir");*/

console.log(confirm("Olá"));

var a=10;
var b = 20;


function somar(a, b){
	return a + b;
}

//alert(somar(a,b));


document.getElementById("btn_calcular").onclick = function(){
	var valorA = document.getElementById("valor_a").value;
	var valorB = document.getElementById("valor_b").value;
	alert(somar(parseInt(valorA), parseInt(valorB)));
	//console.log(parseInt(valorA) + parseInt(valorB));
}