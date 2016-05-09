function chamalista (){
	$.getJSON("http://192.168.1.109:8080/list", function (list){
		var lista = '';
		var i;
		for(i=0; i < list.length; i++){
			lista += list[i].chave + " - " + list[i].nome +"<br>";
		}
		console.log(i);
		$("#disponivel").html(lista);
	})
}

function chamaindividual(tipo,entrada){
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
			chamaindividual('chave',entrada );
		}
		else if(type==true){
			chamaindividual('nome',entrada);
		}
	});
	chamalista();
	$("#att").click(function(){
		chamalista();
	});
});