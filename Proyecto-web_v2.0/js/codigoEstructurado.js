var modeloCatedral = {};

//definimos con key-value, los atributos que va a tener el modelo
modeloCatedral.nombre = "Catedral de Málaga";
modeloCatedral.construccion = "S.XVI - s.XVIII. No obstante se encuentra inacabada por la desviación de fondos que se produjo en la época.";
modeloCatedral.arquitecto = "Diego de Siloé";
modeloCatedral.descripción = "Llamada  cariñosamente por los malagueños La Manquita. Situada en la plaza del Obispo. Construida entre los siglos XVI y XVIII sobre la Mezquita Mayor de la ciudad. Es considerada una de las joyas renacentistas más valiosas de Andalucía.";
modeloCatedral.urllugar = "https://www.google.com/maps/place/Calle+Molina+Lario,+29015+M%C3%A1laga/@36.7201228,-4.4206855,18.3z/data=!4m5!3m4!1s0xd72f795119e824b:0x2da7684bb7377154!8m2!3d36.7199968!4d-4.4200992";
modeloCatedral.urlfotoprincipal = "https://cdn1.guias-viajar.com/wp-content/uploads/2011/12/Catedral-M%C3%A1laga-003-2.jpg"
modeloCatedral.urlfoto1 = "https://farm5.staticflickr.com/4867/31401040277_745c94d397_b.jpg";
modeloCatedral.urlfoto2 = "https://farm5.staticflickr.com/4903/46340281891_4d66efd651_b.jpg";
modeloCatedral.urlfoto3 = "https://farm5.staticflickr.com/4903/31401040017_0fbe085af7_b.jpg";

//definimos los templates que usaremos para introducir información de los modelos
var templateMenuDesplegable = `
				<li class="dropdown-item">
				  <a id="enlaceCatedral" href="#">${modeloCatedral.nombre}</a>
				</li>
				`
var templateInfoDetallada = `
				<div class="row justify-content-center mb-2">
		      	  <h2 class="display-3">${modeloCatedral.nombre}</h2>
		    	</div>
		    	<div class="row justify-content-center ">
		      	  <div id="imagenCatedral" class="col-7 float-left border-right border-dark ">
		        	<img class="rounded" src=${modeloCatedral.urlfotoprincipal} width="100%">
		          </div>
		          <div class="col-3 float-left justify-content-left pl-4">
		        	<h4 id="tituloDescripcion" >Pequeña introducción</h4>
		        	<p>${modeloCatedral.descripción}</p>
		      	  </div>
		    	</div>`

//servicios
//desplega el menu y espera evento del menu
const desplegarMenuRecomendado = function(callback){
	$("#dropdownMenuRecomendado").html(templateMenuDesplegable);
	$("#enlaceCatedral").click(mostrarInfoDetallada);
}

//mostrar información detallada
const mostrarInfoDetallada = function(){
	$("#contenedorPrincipal").html(templateInfoDetallada);
	cambiarImagenesCarousel();
	mostrarInfoBotones();
}

//cambiar la dirección de las imagenes del carousel
const cambiarImagenesCarousel = function(){
	$(".first-slide").attr("src", modeloCatedral.urlfoto1);
	$(".second-slide").attr("src", modeloCatedral.urlfoto2);
	$(".third-slide").attr("src", modeloCatedral.urlfoto3);
}

//introducir la información de los botones(aunque se introducen como display:none)
const mostrarInfoBotones = function(){
	$("#mostrarLugar").html(`Se encuentra en <a href="${modeloCatedral.urllugar}" target="_blank">Calle Molina Lario, 9</a>`);
	$("#mostrarFechaConstruccion").html(modeloCatedral.construccion);
	$("#mostrarArquitecto").html(modeloCatedral.arquitecto);
}

//animacónes para mostrar la información de los botones de debajo del carousel
const animacionBotonLugar = function(){
	$("#mostrarLugar").show((400));
}

const animacionBotonEtapa = function(){
	$("#mostrarFechaConstruccion").show((400));
}

const animacionBotonArquitecto = function(){
	$("#mostrarArquitecto").show((400));
}


//controlador para gestionar evento y ejecutar servicio
//evento click para desplegar menu para elegir monumento/lugar turistico
$("#controladorDropdownSeleccion").click(desplegarMenuRecomendado);

//gestionar que para los botones de debajo del carousel, no se realice el evento por defecto de ir hacia el inicio de la página
$(".btn-primary").click(function(event){
	event.preventDefault();
});
//acciona la función que cambia propiedad display a block, haciendo que se muestre.
$("#controladorMostrarLugar").click(animacionBotonLugar);
$("#controladorMostrarFecha").click(animacionBotonEtapa);
$("#controladorMostrarArquitecto").click(animacionBotonArquitecto);
