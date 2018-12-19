$("#navbarDropdown").click(function(){
	$("#dropdown-menu-recomended").html( 
		`
		<li class="dropdown-item">
		  <a id="enlaceCatedral" href="#">Malaga Cathedral</a>
		</li>
        <li class="dropdown-item">
		  <a href="#">Dock 1</a>
		</li>
        <li class="dropdown-item">
		  <a href="#">Lighthouse</a>
		</li>`
		);

	//mostrar información catedral, cambiar imagenes del carousel
	$("#enlaceCatedral").click(function(){
		$("#contenedorPrincipal").html(
			`
			<div class="row justify-content-center mb-2">
		      <h2 class="display-3">Catedral de malaga</h2>
		    </div>
		    <div class="row justify-content-center ">
		      <div id="imagenCatedral" class="col-7 float-left border-right border-dark ">
		        <img class="rounded" src=https://cdn1.guias-viajar.com/wp-content/uploads/2011/12/Catedral-M%C3%A1laga-003-2.jpg" width="100%">
		      </div>
		      <div class="col-3 float-left justify-content-left pl-4">
		        <h4 id="tituloDescripcion" >Pequeña introducción</h4>
		        <p>info sobre la catedral pojewfoiew jfoeiwjfiowe fiowefowonfwoenfweifnwonffroiwe nfoiwenfoiwenfr   oiwoiwerfo wiowjrw eiofwerfo
		        </p>
		      </div>
		    </div>
		    `);

		//asignar las nuevas rutas de las imagenes del carousel(catedral)
		$(".first-slide").attr("src", "https://farm5.staticflickr.com/4867/31401040277_745c94d397_b.jpg");
		$(".second-slide").attr("src", "https://farm5.staticflickr.com/4903/46340281891_4d66efd651_b.jpg");
		$(".third-slide").attr("src", "https://farm5.staticflickr.com/4903/31401040017_0fbe085af7_b.jpg");
		
		//asignar información para que la muestren los botones
		$("#mostrarLugar").html(`
			Se encuentra en <a href="https://www.google.com/maps/place/Calle+Molina+Lario,+29015+M%C3%A1laga/@36.7201228,-4.4206855,18.3z/data=!4m5!3m4!1s0xd72f795119e824b:0x2da7684bb7377154!8m2!3d36.7199968!4d-4.4200992" target="_blank">Calle Molina Lario, 9</a>
			`);
		$("#mostrarFechaConstruccion").html("Se comenzó a construir en el s.XVI y se paró la construcción en el siglo XVIII por desvio de fondos a otros fines.");
		$("#mostrarArquitecto").html("Se comenzó a construir en el s.XVI y se paró la construcción en el siglo XVIII por desvio de fondos a otros fines.")
	});
});

//botones para cambiar el display none por defectop de la información de los botones a BLOCK para ver la info
$("#controladorMostrarLugar").click(function(){
	$("#mostrarLugar").show();
});
$("#controladorMostrarFecha").click(function(){
	$("#mostrarFechaConstruccion").show();
});
$("#controladorMostrarArquitecto").click(function(){
	$("#mostrarArquitecto").show();
});