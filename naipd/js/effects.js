// desenvolvido por Bernard De Luna - www.bernarddeluna.com  / @bernarddeluna
//Editado por George Oliveira Barros - george_gob@hotmail.com
$(document).ready(function() {
	
//Tudo em relação a fonte
	// aumentando a fonte
	$(".inc-font").click(function () {
		var size = $("#box2").css('font-size');
		
		size = size.replace('px', '');
		size = parseInt(size) + 1.4;
		
		$("#box2").animate({'font-size' : size + 'px'});
		$("#footerAll").animate({'font-size' : size + 'px'});
		$("#footerAll2").animate({'font-size' : size + 'px'});
	});
	
	//diminuindo a fonte
	$(".dec-font").click(function () {
		var size = $("#box2").css('font-size');
		
		size = size.replace('px', '');
		size = parseInt(size) - 1.4;
		
		$("#box2").animate({'font-size' : size + 'px'});
		$("#footerAll").animate({'font-size' : size + 'px'});
		$("#footerAll2").animate({'font-size' : size + 'px'});

	});
	
	// resetando a fonte
	$(".res-font").click(function () {		
		$("#box2").animate({'font-size' : '14px'});
		$("#footerAll").animate({'font-size' : '14px'});
		$("#footerAll2").animate({'font-size' : '14px'});
	});
	

//Tudo em relação ao efeito de contraste
	//Alterando contraste
	$(".inc-contra").click(function () {
		$("#superTopo").css({color:"white", background:"gray"});
		$("body").css({color:"black", background:"#000"}); 
		//$("#box2").css({color:"blue", background:"#000"});
		$("a").css({color:"white", background:"black"});
		$("h2").css({color:"white", background:"black"});
		$("#logo").css({color:"white", background:"#FFF"});
		$("#menu").css({color:"white", background:"#000"});
		$("#bloco2").css({color:"white", background:"black"});
		$("#bloco3").css({color:"white", background:"#000"});
		$("#bloco4").css({color:"white", background:"#000"});
		$("#footerAll").css({color:"white", background:"#000"});
		$("#footerAll2").css({color:"white", background:"#000"});
		//alert("Função de contraste");
	});


//Criando Atalho
//http://odesenvolvedor.andafter.org/publicacoes/criar-atalhos-no-teclado-com-javascript-e-jquery_1465.html

//Medindo desempenho
//http://tableless.com.br/navigation-timing-api/#.UkxyDtKkq0c

//Modelo
//http://www.riodasostras.rj.gov.br/mapa-do-site.html#incontent

//Outro link
//http://minutojquery.blogspot.com.br/2012/07/como-alterar-seu-css-com-jquery.html


//Exemplos do Livro JQUERY
//http://www.livrojquery.com.br/index-1ed.php

});
