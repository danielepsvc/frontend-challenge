// Render Weather page
module.exports = (req, res) => {
  res.render('weather', {

    $return: "./room",

    $place1: "Lisboa",
    $place2: "Barcelona",
    $place3: "Madrid",
    $place4: "London",
    $place5: "Paris",
    $place6: "Melborne",

    $precipitation: "0 %",
    $humidity: "34 %",
    $wind: "0 km/h",

    $weather1Icon: "sun",
    $weather1WD: "Sunday",
    $weather1Temp: "25°C",
    $weather1Desc: "Sunny",
    $weather1Date: "15 Jan 2019",
    $weather1Place: "Lisboa, PT",

    $miniWeather1Icon: "sun",
    $miniWeather1Day: "Monday",
    $miniWeather1Max: "25°C / 45ºF",
    $miniWeather1Min: "14°C/ 27ªF",

    $miniWeather2Icon: "sun",
    $miniWeather2Day: "Tuesday",
    $miniWeather2Max: "29°C/ 65ºF",
    $miniWeather2Min: "14°C/ 27ªF",

    $miniWeather3Icon: "cloud",
    $miniWeather3Day: "Wednesday",
    $miniWeather3Max: "21°C/ 61ºF",
    $miniWeather3Min: "14°C/ 27ªF",

    $miniWeather4Icon: "cloud-snow",
    $miniWeather4Day: "Thuesday",
    $miniWeather4Max: "20°C/ 111ªF",
    $miniWeather4Min: "14°C/ 27ªF",

    $miniWeather5Icon: "cloud-rain",
    $miniWeather5Day: "Friday",
    $miniWeather5Max: "29°C/ 123ªF",
    $miniWeather5Min: "14°C/ 27ªF"

  });
}

function addLeadingZero(i) {
  if (i < 10) { i = "0" + i }
  return i;
}