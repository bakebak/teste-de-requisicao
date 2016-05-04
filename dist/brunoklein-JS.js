$(document).ready(function(){

	$("#botao").click(function(){
		var entrada = $("#numero").val();
		if(entrada!=''){
			$.getJSON("http://192.168.1.109:8080/product?chave="+entrada, function (data){
				
				var saida = "";
				saida = "Nome: " + data.nome + "<br>" +
				"Valor: " + data.valor + "<br>" +
				"Status: " + data.status + "<br>" +
				"Estoque: " + data.estoque + "<br>";
				$ ("#dados").html(saida);
			})
		}else{
			$ ("#dados").html(' ');
		}	
	})
})