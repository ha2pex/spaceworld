function loadApp(path) {
	var path = path;
	if (window.matchmedia("max-width: 480px").matches) {
		const navbarContent = `
		<div class="navbar">
			<a class="left" href="${path}"><img class="logo" src="${path}/static/assets/WSIcon.png" /></a>
			<button><a class="left" href="${path}/codex.html"><img src="${path}/static/assets/icons/book.svg" class="navbarIcon" /></a>
			<button><a class="left" href="${path}/contact.html><img src="${path}/static/assets/icons/mail-open.svg" class="navbarIcon" /></a>
		</div>`
	} else {
		const navbarContent = `
		<div class="navbar">
			<a class="left" href="${path}"><img class="logo" src="${path}/static/assets/WSIcon.png" /></a>
			<button><a class="left" href="${path}/codex.html">Get started</a></button>
			<button><a class="left" href="${path}/contact.html">Contact us</a></button>
		</div>`
	} 
	document.getElementById('navbar').innerHTML = navbarContent;
}
