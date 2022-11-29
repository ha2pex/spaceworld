function loadApp(path) {
	var path = path;
	const navbarContent = `
	<div class="navbar">
		<a class="left" href="#"><img class="logo" src="WSIcon.png" /></a>
		<button><a class="left" href="#">Text 1</a></button>
		<button><a class="left" href="#">Text 2</a></button>
		<button><a class="right" href="#">Text 3</a></button>
	</div>`
	document.getElementById('navbar').innerHTML = navbarContent;
}
