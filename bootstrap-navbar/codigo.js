/*document.getElementById("tourism-menu").onclick = showSubMenu;

function showSubMenu() {
	document.getElementById("dropdown-menu").innerHTML = 
		`<ul>
			<li>Alcazaba</li>
			<li>Centro Histórico</li>
			<li>Muelle 1</li>
		</ul>`;
}*/


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
		</li>`);

	$("#enlaceCatedral").click(function(){
		$("#contenedorPrincipal").html(
			`
			<div class="row justify-content-center mb-2">
		      <h2 class="display-3">Catedral de malaga</h2>
		    </div>
		    <div class="row justify-content-center ">
		      <div id="imagenCatedral" class="col-7 float-left border-right border-dark pr-4">
		        <img class="rounded" src=https://cdn1.guias-viajar.com/wp-content/uploads/2011/12/Catedral-M%C3%A1laga-003-2.jpg" 
		           width="100%" height="500">
		      </div>
		      <div class="col-3 float-left justify-content-left pl-4">
		        <h4 id="tituloDescripcion" >Pequeña introducción</h4>
		        <p>info sobre la catedral pojewfoiew jfoeiwjfiowe fiowefowonfwoenfweifnwonffroiwe nfoiwenfoiwenfr   oiwoiwerfo wiowjrw eiofwerfo
		        </p>
		      </div>
		    </div>
		    `);

		var primeraFoto = "http://sevilleventours.com/wp-content/uploads/2017/05/malaga-visitas-guiadas-sevilleventours.jpg"
		$(".first-slide").attr("src", primeraFoto);	});
});