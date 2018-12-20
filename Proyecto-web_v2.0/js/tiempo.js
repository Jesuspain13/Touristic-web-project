var app = {};
app.apikey = "839256392c6f30efe6bcb631be1fc14";
app.url = "http://api.openweathermap.org/data/2.5/weather?q=Malaga,es&units=metric&appid=839256392c6f30efe6bcb631b1e1fc14";
app.cargaDatos = function(){
	$.ajax({
		url: app.url,
		success: function( data ) {
			app.datos = data;
			app.procesaDatos();
		},
		error: function(){
			alert("¡Ups! No puedo obtener información de la API");
		}
	});
}

app.procesaDatos = function(){
	app.condicionNombre = app.datos.weather[0].main;
	app.temperatura = app.datos.main.temp;
	var condicionIcono = app.datos.weather[0].icon;
	app.icono = app.obtenIcono( condicionIcono );
	app.muestra();
} 

app.muestra = function(){
	//$('#js_w_temp').append("<p class='weather_temperature'>" +  app.temperatura + "</p>");
	//$('#js_w_icon').append(" <i class='wi " + app.icono + "'></i>");
	//$('#js_w_icon').append("<p class='weather_name'>" +  app.condicionNombre.toUpperCase() + "</p>");
	$('#mostrarTiempo').html(`<p class='weather_temperature'> ${app.temperatura}℃ | <i class='wi ${app.icono}'></i></p>`)
}
app.obtenIcono = function( weatherIcon ) {
	var icon;
	switch( weatherIcon ){
		case "01d":
		case "01n":
		icon = "wi-day-sunny";
		break;
		case "02d":
		case "02n":
		icon = "wi-day-cloudy";
		break;
		case "03d":
		case "03n":
		icon = "wi-cloud";
		break;
		case "04d":
		case "04n":
		icon = "wi-cloudy";
		break;
		case "09d":
		case "09n":
		icon = "wi-day-rain";
		break;
		case "10d":
		case "10n":
		icon = "wi-day-rain-mix";
		break;
		case "11d":
		case "11n":
		icon = "wi-thunderstorm";
		break;
		case "13d":
		case "13n":
		icon = "wi-day-snow";
		break;
		case "50d":
		case "50n":
		icon = "wi-day-fog";
		break;
		default:
		icon = "wi-day-sunny";
		break;
	}
	return icon;
}

$.when( $.ready ).then(function() {
	app.cargaDatos();
});
