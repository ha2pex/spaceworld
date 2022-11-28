function loadPage(lang) {
	fetch('./strings/${lang}.js')
		.then(res => res.json())
		.then(data => {
			const app = `
			<header id="header">
				<h1>Space World</h1>
				<h4>${data.motto}</h4>
				<p>${data.description}</p>
				<button class="btn-white"><a href="/get-started.html">${data.getStartedText}</a></button> <button class="btn-discord"><a href="" target="_blank">${data.joinDiscord}</a></button>
			</header>`
			document.getElementById('app').innerHTML = app;
	});
}
