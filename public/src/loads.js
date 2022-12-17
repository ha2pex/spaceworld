function loadApp(path) {
	var path = path;
	var invite = 'https://discord.gg/Bp22t3qynX'
	const mNavbarContent = `
	<div class="navbar">
		<button onClick="open('${path}/codex.html')"><img src="${path}/static/icons/codex.svg" class="navbarIcon" /></button>
		<button onClick="open('${path}/contact.html')"><img src="${path}/static/icons/mail-open.svg" class="navbarIcon" /></button>
		<button onClick="open('${path}')"><img src="${path}/static/icons/home.svg" class="navbarIcon" /></button>
		<button onClick="open('${invite}')"><img src="${path}/static/icons/join.svg" class="navbarIcon" /></button>
		<button onClick="open('${path}/privacy.html')"><img src="${path}/static/icons/privacy.svg" class="navbarIcon" /></button>
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
	<a href="${path}/codex.html">Codex</a><br>
	<a href="${path}catalog/index.html">Catalogue</a><br>
	<a href="${path}/privacy.html">Confidentialité</a><br><br>
	<button class="btn btn-discord"><a href="${invite}" target="_blank">Discord</a></button>
	<button class="btn btn-white"><a href="#header">Haut de page</a></button>`
	document.getElementById('footer').innerHTML = footerContent;	
}

function open(link) {
	location.replace(link);
}
