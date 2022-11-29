function loadApp(path) {
	var path = path;
	const navbarContent = `
	<div class="navbar">
		<a class="left" href="${path}"><img class="logo" src="${path}/static/assets/WSIcon.png" /></a>
		<button><a class="left" href="${path}/get-started.html">Get started</a></button>
		<button><a class="left" href="${path}/contact.html">Contact us</a></button>
		<button><a class="right" href="#"><img src="${path}/static/icons/flag-uk.svg" /></a></button>
	</div>`
	document.getElementById('navbar').innerHTML = navbarContent;
}
