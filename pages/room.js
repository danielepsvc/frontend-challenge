
// Render Home page
module.exports = (req, res) => {
    res.render('main', { 
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

		today: new Date().toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric" }),
		hour: addLeadingZero(new Date().getHours()) + ":" + addLeadingZero(new Date().getMinutes()),
		weatherIcon: "fa-solid fa-cloud-moon",
		weatherTemp: "61ºF / 16ºC",
		room: "101",

		news1Icon: "../src/images/room/news1.jpg",
		news1Title: "SPA 20% off",
		news1Line1: "Opened 8:00 - 19:00",
		news1Line2: "",
		news1note: "For more information ask the reception",

		news2Icon: "../src/images/room/news2.jpg",
		news2Title: "Breakfast",
		news2Line1: "Served between",
		news2Line2: "7:30 - 11:00",
		news2note: "Please book a table at the restaurant"

    });
}

function addLeadingZero(i) {
	if (i < 10) {i = "0" + i}
	return i;
  }