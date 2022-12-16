function loadApp(path) {
	var path = path;
	const mNavbarContent = `
	<div class="navbar">
		<a class="left" href="${path}"><img class="logo" src="${path}/static/assets/WSIcon.png" /></a>
		<button><a class="left" href="${path}/codex.html"><img src="${path}/static/assets/icons/book.svg" class="navbarIcon" /></a>
		<button><a class="left" href="${path}/contact.html><img src="${path}/static/assets/icons/mail-open.svg" class="navbarIcon" /></a>
	</div>`
	
	const navbarContent = `
	<div class="navbar">
		<a class="left" href="${path}"><img class="logo" src="${path}/static/assets/WSIcon.png" /></a>
		<button><a class="left" href="${path}/codex.html">Codex</a></button>
		<button><a class="left" href="${path}/contact.html">Contact</a></button>
	</div>`
	
	const footerContent = `
	<a href="./guidelines.html">Guidelines</a><br>
	<a href="./catalog/index.html">Catalog</a><br>
	<a href="./privacy.html">Privacy</a><br><br>
	<button class="btn btn-discord"><a href="https://discord.com" target="_blank">Discord</a></button>
	<button class="btn btn-white"><a href="#header">Return to top</a></button>`
	
	document.getElementById('navbar-mobile").innerHTML = mNavbarContent;
	document.getElementById('navbar').innerHTML = navbarContent;
	document.getElementById('footer').innerHTML = footerContent;
}
