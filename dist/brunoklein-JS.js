$(document).ready(function(){

	$("#botao").click(function(){
		$.getJSON("http://192.168.1.109:8080/list", function (data){
			var entrada = $("#numero").val();
			var saida = "";
			saida = "Nome: " + data[entrada-1].nome + "<br>" +
			"Valor: " + data[entrada-1].valor + "<br>" +
			"Status: " + data[entrada-1].status + "<br>" +
			"Estoque: " + data[entrada-1].estoque + "<br>";
			$ ("#dados").html(saida);
		})
	})
})