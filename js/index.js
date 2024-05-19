function init() {
	fetch("https://swapi.dev/api/people/1/")
		.then(function (response) {
			return response.json();
		})
		.then(function (RawData) {
			RawData.forEach(function (Data) {
				console.log(Data);
			});
		});
}

init();
