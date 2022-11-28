function loadApp(path) {
	var path = path;
	const navbarContent = `
	<ul>
		<li><a href="${path}" class="navElem-L"><img src="${path}/static/assets/WSIcon.png" /></a></li>
		<li><a href="${path}/get-started.html" class="navElem-L">Get started</a></li>
		<li><a href="${path}/contact.html" class="navElem-L">Contact</a></li>
		<li class="dropdown">
			<img src="${path}/static/icons/flag-en.svg" />
			<ul class="submenu">
				<li><a class="navElem-R"><img src="${path}/static/icons/flag-fr.svg" onClick="setLanguage('fr')" /></a></li>
				<li><a class="navElem-R"><img src="${path}/static/icons/flag-uk.svg" onClick="setLanguage('uk')" /></a></li>
			</ul>
		</li>
		<li><a class="navElem-R"><img src="${path}/static/icons/theme.svg" onClick="changeTheme()" /></a></li>
	</ul>`
	document.getElementById('navbar').innerHTML = navbarContent;
}
