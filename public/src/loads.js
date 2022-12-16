function loadApp(path) {
	var path = path;
	const mNavbarContent = `
	<div class="navbar">
		<a class="left" href="${path}"><img class="logo" src="${path}/static/assets/WSIcon.png" /></a>
		<button><a class="left" href="${path}/codex.html"><img src="${path}/static/icons/codex.svg" class="navbarIcon" /></a>
		<button><a class="left" href="${path}/contact.html><img src="${path}/static/icons/mail-open.svg" class="navbarIcon" /></a>
	</div>`
	document.getElementById('navbar-mobile').innerHTML = mNavbarContent;
	
	const navbarContent = `
	<div class="navbar">
		<a class="left" href="${path}"><img class="logo" src="${path}/static/assets/WSIcon.png" /></a>
		<button><a class="left" href="${path}/codex.html">Codex</a></button>
		<button><a class="left" href="${path}/contact.html">Contact</a></button>
	</div>`
	document.getElementById('navbar').innerHTML = navbarContent;
	
	const footerContent = `
	<a href="./codex.html">Codex</a><br>
	<a href="./catalog/index.html">Catalogue</a><br>
	<a href="./privacy.html">Confidentialité</a><br><br>
	<button class="btn btn-discord"><a href="https://discord.com" target="_blank">Discord</a></button>
	<button class="btn btn-white"><a href="#header">Haut de page</a></button>`
	document.getElementById('footer').innerHTML = footerContent;	
}
