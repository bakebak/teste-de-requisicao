var host = {urlList:"http://192.168.1.109:8080/list", urlProduct:"http://192.168.1.109:8080/product?"};

function chamaLista (){
	$.getJSON(host["urlList"], function (list){
		var lista = '';
		var i;
		for(i=0; i < list.length; i++){
			lista += list[i].chave + " - " + list[i].nome +"<br>";
		}
		$("#disponivel").html(lista);
	})
}

function chamaIndividual(tipo,entrada){
	entrada=entrada.toLowerCase()
	$.getJSON(host["urlProduct"] + tipo + "=" + entrada, function (data){ //.getJSON faz uma requisição e o que retornar ele transforma em JSON
		escrevendoSaida(data);
	})
	.fail(function() {
	    $("#dados").html('Fruta não disponível!');
	})
}

function escrevendoSaida (data){
	var saida = "";
	saida = "Fruta: " + data.nome + "<br>" +
	"Valor: R$ " + data.valor + "<br>" +
	"Status: " + data.status + "<br>" +
	"Estoque: " + data.estoque + "<br>";
	$("#dados").html(saida);
}

function tipoEntrada(){
	var entrada = $("#numero").val();
	var type = isNaN(entrada); //isNaN -> testa se não é um número
	if(type==false){
		chamaIndividual('chave',entrada);
	}
	else if(type==true){
		chamaIndividual('nome',entrada);
	}
}

$(document).ready(function(){
	$("#botao").click(function(){
		tipoEntrada();
	});
	chamaLista();
	$("#att").click(function(){
		chamaLista();
	});
});