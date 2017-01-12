/* MENU */
	/*function MenuTrasicion(px,gama,color,tiempo) {*/
		
		$('a')
		.mouseover(function(){
			$("a").stop().animate(
				{borderBottomColor:"#434"}, 
				{duration:600})
		console.log("entrada esta bien");
		})
		.mouseout(function(){
			$(".MenuTrasicion").stop().animate(
				{"border-bottom-color":"#668"}, 
				{duration:600})
			console.log("salida esta bien");
			})
/*alert("todo esta bien");*/




		