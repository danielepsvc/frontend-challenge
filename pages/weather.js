// Render Weather page
module.exports = (req, res) => {
    res.render('weather', { 
    });
}

function addLeadingZero(i) {
	if (i < 10) {i = "0" + i}
	return i;
  }