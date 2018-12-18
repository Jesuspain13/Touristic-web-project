	
$(document).on('click', ".shared", function() {	
	var url = window.location.href;
	var title = document.title;
	
	url = encodeURIComponent(url);
	title = encodeURIComponent(title);
	
	//Boton Facebook
	if($(this).hasClass('fb')){	
		url = 'https://www.facebook.com/MalagaTurismoOficial/';

	//Boton Twitter
	}else if($(this).hasClass('tt')){
		user = 'DevlazMX';//Nuestro usuario de twitter para mostrar como @user
		url = 'https://twitter.com/turismodemalaga';
	
	//Boton Youtube
	}else if($(this).hasClass('yt')){
		url = 'https://www.youtube.com/user/malagaturismo';
	
	//Boton WhtsApp
	}else if($(this).hasClass('in')){		
		url = 'https://www.instagram.com/malagaturismo/?hl=es';
	
		
	//Ningun boton valido
	}else return;
	
	//Abrimos la url
	window.open(url, '_blank');			
});
