function init() {
	FetchPeople();
}

function FetchPeople() {
	fetch("https://swapi.dev/api/people/")
		.then(function (response) {
			return response.json();
		})
		.then(function (RawData) {
			console.log(RawData);
			RawData.results.forEach(function (Data) {
				console.log(Data);
				displayData(Data);
			});
		});
}

function displayData(Data) {
	Data.results.forEach((item) => {
		output += `
	<h4>${item.name}</h4>`;
	});
}

init();
