$(document).ready(function(){
	$("#botao").click(function(){
		var entrada = $("#numero").val();
		var type = isNaN(entrada); //isNaN -> testa se não é um número
		if(type==false){
			$.getJSON("http://192.168.1.109:8080/product?chave="+entrada, function (data){ //.getJSON faz uma requisição e o que retornar ele transforma em JSON
				var saida = "";
				saida = "Fruta: " + data.nome + "<br>" +
				"Valor: " + data.valor + "<br>" +
				"Status: " + data.status + "<br>" +
				"Estoque: " + data.estoque + "<br>";
				$("#dados").html(saida);
			})
			.fail(function() {
			    $("#dados").html('Fruta não disponível!');
			})
		}
		else if(type==true){
			$.getJSON("http://192.168.1.109:8080/product?nome="+entrada, function (data){
				var saida = "";
				saida = "Fruta: " + data.nome + "<br>" +
				"Valor: " + data.valor + "<br>" +
				"Status: " + data.status + "<br>" +
				"Estoque: " + data.estoque + "<br>";
				$("#dados").html(saida);
			})
			.fail(function() {
			    $("#dados").html('Fruta não disponível!');
			})
		}
	})
})