
// Render Home page
module.exports = (req, res) => {
    res.render('grid', {
		app1Icon: "fa-solid fa-tv",
		app1Title: "TV & Entertainment",
		app1URL: "#",

		app2Icon: "fa-brands fa-youtube",
		app2Title: "Youtube",
		app2URL: "#",

		app3Icon: "fa-brands fa-hubspot",
		app3Title: "Connect",
		app3URL: "#",

		app4Icon: "fa-solid fa-utensils",
		app4Title: "Dining & Bar",
		app4URL: "#",

		app5Icon: "fa-solid fa-hotel",
		app5Title: "Hotel",
		app5URL: "#",

		app6Icon: "fa-solid fa-city",
		app6Title: "City",
		app6URL: "#",

		app7Icon: "fa-solid fa-bed",
		app7Title: "Room",
		app7URL: "./room",

		app8Icon: "fa-solid fa-language",
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