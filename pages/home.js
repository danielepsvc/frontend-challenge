
// Render Home page
module.exports = (req, res) => {
    res.render('grid', {
		pageTitle: "The Hotel",

		app1Icon: "tv",
		app1Title: "TV & Entertainment",
		app1URL: "#",

		app2Icon: "youtube",
		app2Title: "Youtube",
		app2URL: "#",

		app3Icon: "airplay",
		app3Title: "Connect",
		app3URL: "#",

		app4Icon: "coffee",
		app4Title: "Dining & Bar",
		app4URL: "#",

		app5Icon: "home",
		app5Title: "Hotel",
		app5URL: "#",

		app6Icon: "map",
		app6Title: "City",
		app6URL: "#",

		app7Icon: "briefcase",
		app7Title: "Room",
		app7URL: "./room",

		app8Icon: "globe",
		app8Title: "Language",
		app8URL: "#",

		today: new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }),
		weatherIcon: "fa-solid fa-cloud-moon",
		weatherTemp: "61ºF / 16ºC",
		room: "101",
		registerUsername: "Mr.Smith",

		selectedLang: "en"
	});
}