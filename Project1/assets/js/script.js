var userLocation = {
    latitude: '',
    longitude: ''
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
		'X-RapidAPI-Key': 'a488a1dcf2mshc1a8bad851bd1d8p1fdfafjsn5c896efb003a'
	}
};

const button = document.getElementById('btnClick');

button.addEventListener('click', function () {
    fetch('`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US`, options')
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.error(err);
        });
});

function myFunction() {
	document.getElementById("btnClick").currentPosition;
}


navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    userLocation.latitude = position.coords.latitude;
    userLocation.longitude = position.coords.longitude;
  });
