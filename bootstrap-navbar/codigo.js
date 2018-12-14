/*document.getElementById("tourism-menu").onclick = showSubMenu;

function showSubMenu() {
	document.getElementById("dropdown-menu").innerHTML = 
		`<ul>
			<li>Alcazaba</li>
			<li>Centro Histórico</li>
			<li>Muelle 1</li>
		</ul>`;
}*/

var list = document.getElementById("navbarDropdown");

list.onclick = function() {
	var result = document.getElementById("dropdown-menu-recomended");
	result.innerHTML = 
		`<a class="dropdown-item" href="#">Malaga Cathedral</a>
         <a class="dropdown-item" href="#">Dock 1</a>
         <a class="dropdown-item" href="#">Lighthouse</a>`;
};
