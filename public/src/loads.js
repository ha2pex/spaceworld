function loadApp(path) {
	var path = path;
	const mNavbarContent = `
	<div class="navbar">
		<button onClick="open('codex.html')"><img src="${path}/static/icons/codex.svg" class="navbarIcon" /></button>
		<button onClick="open('contact.html')"><img src="${path}/static/icons/mail-open.svg" class="navbarIcon" /></button>
		<button onClick="open('.')"><img src="${path}/static/icons/home.svg" class="navbarIcon" /></button>
		<button onClick="open('${invite}')"><img src="${path}/static/icons/join.svg" class="navbarIcon" /></button>
		<button onClick="open('privacy.html')"><img src="${path}/static/icons/privacy.svg" class="navbarIcon" /></button>
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

function open(link) {
	window.location.replace = link;
}
