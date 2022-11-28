function loadApp(path) {
	var path = path;
	const navbarContent = `
	<a href="${path}" class="navElem-L"><img src="${path}/static/assets/WSIcon.png" /></a>
	<a href="${path}/get-started.html" class="navElem-L">Get started</a>
	<a href="${path}/contact.html" class="navElem-L">Contact</a>
	<a class="navElem-R"><img src="${path}/static/icons/flag-fr.svg" onClick="setLanguage('fr')" /></a>
	<a class="navElem-R"><img src="${path}/static/icons/theme.svg" onClick="changeTheme()" /></a>`
	document.getElementById('navbar');
}
