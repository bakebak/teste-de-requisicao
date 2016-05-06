$(document).ready(function(){
	$("#botao").click(function(){
		var entrada = $("#numero").val();
		$.getJSON("http://192.168.1.109:8080/product?chave="+entrada, function (data){
			var saida = "";
			saida = "Nome: " + data.nome + "<br>" +
			"Valor: " + data.valor + "<br>" +
			"Status: " + data.status + "<br>" +
			"Estoque: " + data.estoque + "<br>";
			$("#dados").html(saida);
		})
		.fail(function() {
		    $("#dados").html('Esse produto não existe!');
		})
	})
})