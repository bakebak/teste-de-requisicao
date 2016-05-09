function chamaLista (){
	$.getJSON("http://192.168.1.109:8080/list", function (list){
		var lista = '';
		var i;
		for(i=0; i < list.length; i++){
			lista += list[i].chave + " - " + list[i].nome +"<br>";
		}
		$("#disponivel").html(lista);
	})
}

function chamaIndividual(tipo,entrada){
	$.getJSON("http://192.168.1.109:8080/product?"+tipo+"=" + entrada, function (data){ //.getJSON faz uma requisição e o que retornar ele transforma em JSON
		var saida = "";
		saida = "Fruta: " + data.nome + "<br>" +
		"Valor: R$ " + data.valor + "<br>" +
		"Status: " + data.status + "<br>" +
		"Estoque: " + data.estoque + "<br>";
		$("#dados").html(saida);
	})
	.fail(function() {
	    $("#dados").html('Fruta não disponível!');
	})
}

$(document).ready(function(){
	$("#botao").click(function(){
		var entrada = $("#numero").val();
		var type = isNaN(entrada); //isNaN -> testa se não é um número
		if(type==false){
			chamaIndividual('chave',entrada);
		}
		else if(type==true){
			chamaIndividual('nome',entrada);
		}
	});
	chamaLista();
	$("#att").click(function(){
		chamaLista();
	});
});