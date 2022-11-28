function loadApp(path) {
	var path = path;
	const navbarContent = `
	<ul>
		<li><a href="${path}"><img src="${path}/static/assets/WSIcon.png" /></a></li>
		<li><a href="${path}/get-started.html">Get started</a></li>
		<li><a href="${path}/contact.html">Contact</a></li>
		<li class="dropdown">
			<a><img src="${path}/static/icons/flag-en.svg" /></a>
			<ul class="submenu">
				<li><a><img src="${path}/static/icons/flag-fr.svg" onClick="setLanguage('fr')" /></a></li>
				<li><a><img src="${path}/static/icons/flag-uk.svg" onClick="setLanguage('uk')" /></a></li>
			</ul>
		</li>
		<li><a class="navElem-R"><img src="${path}/static/icons/theme.svg" onClick="changeTheme()" /></a></li>
	</ul>`
	document.getElementById('navbar').innerHTML = navbarContent;
}
