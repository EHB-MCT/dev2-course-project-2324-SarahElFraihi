let currentCategory = "People";
let currentPage = 1;
const ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
	type: "bar",
	data: {
		labels: ["People", "Planets", "Films", "Species", "Vehicles", "Starship"],
		datasets: [
			{
				label: "count",
				data: [82, 60, 6, 37, 39, 36],
				borderWidth: 3,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});

function init() {
	FetchAllData();

	// sort buttons
	document.getElementById("People").addEventListener("click", () => {
		clearContainer();
		currentCategory = "People";
		FetchPeople(1);

		myChart.destroy();

		myChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["Planets", "Films", "Species", "Vehicles", "Starship"],
				datasets: [
					{
						label: "count",
						data: [60, 6, 37, 39, 36],
						borderWidth: 3,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});

	document.getElementById("Planets").addEventListener("click", () => {
		clearContainer();
		currentCategory = "Planets";
		FetchPlanet(1);

		myChart.destroy();

		myChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["People", "Films", "Species", "Vehicles", "Starship"],
				datasets: [
					{
						label: "count",
						data: [82, 6, 37, 39, 36],
						borderWidth: 3,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});

	document.getElementById("Films").addEventListener("click", () => {
		clearContainer();
		currentCategory = "Films";
		FetchFilms(1);

		myChart.destroy();

		myChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["People", "Planets", "Species", "Vehicles", "Starship"],
				datasets: [
					{
						label: "count",
						data: [82, 60, 37, 39, 36],
						borderWidth: 3,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});

	document.getElementById("Species").addEventListener("click", () => {
		clearContainer();
		currentCategory = "Species";
		FetchSpecies(1);

		myChart.destroy();

		myChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["People", "Planets", "Films", "Vehicles", "Starship"],
				datasets: [
					{
						label: "count",
						data: [82, 60, 6, 39, 36],
						borderWidth: 3,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});

	document.getElementById("Vehicles").addEventListener("click", () => {
		clearContainer();
		currentCategory = "Vehicles";
		FetchVehicles(1);

		myChart.destroy();

		myChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["People", "Planets", "Films", "Species", "Starship"],
				datasets: [
					{
						label: "count",
						data: [82, 60, 6, 37, 36],
						borderWidth: 3,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});

	document.getElementById("Starships").addEventListener("click", () => {
		clearContainer();
		currentCategory = "Starships";
		FetchStarship(1);

		myChart.destroy();

		myChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["People", "Planets", "Films", "Species", "Vehicles"],
				datasets: [
					{
						label: "count",
						data: [82, 60, 6, 37, 39],
						borderWidth: 3,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});

	// reset button
	document.getElementById("Reset").addEventListener("click", () => {
		clearContainer();
		FetchAllData(); // Reset data

		myChart.destroy();

		myChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: [
					"People",
					"Planets",
					"Films",
					"Species",
					"Vehicles",
					"Starship",
				],
				datasets: [
					{
						label: "count",
						data: [82, 60, 6, 37, 39, 36],
						borderWidth: 3,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});

	// see more button
	document.getElementById("seeMore").addEventListener("click", () => {
		if (currentCategory === "People") {
			FetchPeople(currentPage + 1);
		} else if (currentCategory === "Planets") {
			FetchPlanet(currentPage + 1);
		} else if (currentCategory === "Films") {
			FetchFilms(currentPage + 1);
		} else if (currentCategory === "Species") {
			FetchSpecies(currentPage + 1);
		} else if (currentCategory === "Vehicles") {
			FetchVehicles(currentPage + 1);
		} else if (currentCategory === "Starships") {
			FetchStarship(currentPage + 1);
		}
	});
}

function FetchAllData() {
	FetchPeople(1, false);
	FetchPlanet(1, false);
	FetchFilms(1, false);
	FetchSpecies(1, false);
	FetchVehicles(1, false);
	FetchStarship(1, false);
}
function clearContainer() {
	document.querySelector("#container").innerHTML = "";
}

function FetchPeople(page) {
	fetch(`https://swapi.dev/api/people/?page=${page}`)
		.then((response) => response.json())
		.then((RawData) => {
			RawData.results.forEach((Data) => {
				const name = Data.name;
				const height = Data.height;
				const mass = Data.mass;
				const hair = Data.hair_color;
				const eye = Data.eye_color;
				const birth = Data.birth_year;
				const gender = Data.gender;
				DisplayPeople(name, height, mass, hair, eye, birth, gender);
			});
			currentPage = page;
		});
}

function DisplayPeople(name, height, mass, hair, eye, birth, gender) {
	const html = `<div class="box"><h3>${name}</h3>
    <p> height : ${height} cm</p>
    <p> mass : ${mass} kg</p>
    <p> hair color : ${hair}</p>
    <p> eye color : ${eye}</p>
    <p> birth year : ${birth}</p>
    <p> gender : ${gender}</p>
    </div>`;
	document.querySelector("#container").innerHTML += html;
}

function FetchPlanet(page) {
	fetch(`https://swapi.dev/api/planets/?page=${page}`)
		.then((response) => response.json())
		.then((RawData) => {
			RawData.results.forEach((Data) => {
				const name = Data.name;
				const rotation = Data.rotation_period;
				const orbital = Data.orbital_period;
				const diameter = Data.diameter;
				const climate = Data.climate;
				const gravity = Data.gravity;
				const terrain = Data.terrain;
				const population = Data.population;
				DisplayPlanet(
					name,
					rotation,
					orbital,
					diameter,
					climate,
					gravity,
					terrain,
					population
				);
			});
			currentPage = page;
		});
}

function DisplayPlanet(
	name,
	rotation,
	orbital,
	diameter,
	climate,
	gravity,
	terrain,
	population
) {
	const html = `<div class="box"><h3>${name}</h3>
    <p> rotation period : ${rotation}</p>
    <p> orbital period : ${orbital}</p>
    <p> diameter : ${diameter}</p>
    <p> climate : ${climate}</p>
    <p> gravity : ${gravity}</p>
    <p> terrain : ${terrain}</p>
    <p> population : ${population}</p>
    </div>`;
	document.querySelector("#container").innerHTML += html;
}

function FetchFilms(page) {
	fetch(`https://swapi.dev/api/films/?page=${page}`)
		.then((response) => response.json())
		.then((RawData) => {
			RawData.results.forEach((Data) => {
				const title = Data.title;
				const director = Data.director;
				const producer = Data.producer;
				const date = Data.release_date;
				DisplayFilms(title, director, producer, date);
			});
			currentPage = page;
		});
}

function DisplayFilms(title, director, producer, date) {
	const html = `<div class="box"><h3>${title}</h3>
    <p> director : ${director}</p>
    <p> producer : ${producer}</p>
    <p> date : ${date}</p>
    </div>`;
	document.querySelector("#container").innerHTML += html;
}

function FetchSpecies(page) {
	fetch(`https://swapi.dev/api/species/?page=${page}`)
		.then((response) => response.json())
		.then((RawData) => {
			RawData.results.forEach((Data) => {
				const names = Data.name;
				const classification = Data.classification;
				const designation = Data.designation;
				const height = Data.average_height;
				const skin = Data.skin_colors;
				const hair = Data.hair_colors;
				const eye = Data.eye_colors;
				const life = Data.average_lifespan;
				DisplaySpecies(
					names,
					classification,
					designation,
					height,
					skin,
					hair,
					eye,
					life
				);
			});
			currentPage = page;
		});
}

function DisplaySpecies(
	names,
	classification,
	designation,
	height,
	skin,
	hair,
	eye,
	life
) {
	const html = `<div class="box"><h3>${names}</h3>
    <p> classification : ${classification}</p>
    <p> designation : ${designation}</p>
    <p> average height : ${height}</p>
	<p> skin colors : ${skin}</p>
	<p> haire colors : ${hair}</p>
	<p> eye colors : ${eye}</p>
	<p> life span : ${life}</p>
    </div>`;
	document.querySelector("#container").innerHTML += html;
}

function FetchVehicles(page) {
	fetch(`https://swapi.dev/api/vehicles/?page=${page}`)
		.then((response) => response.json())
		.then((RawData) => {
			RawData.results.forEach((Data) => {
				const names = Data.name;
				const model = Data.model;
				const manufacturer = Data.manufacturer;
				const credits = Data.cost_in_credits;
				const length = Data.length;
				const speed = Data.max_atmosphering_speed;
				const crew = Data.crew;
				const passengers = Data.passengers;
				const capacity = Data.cargo_capacity;
				const consumables = Data.consumables;
				const vehicle = Data.vehicle_class;
				DisplayVehicles(
					names,
					model,
					manufacturer,
					credits,
					length,
					speed,
					crew,
					passengers,
					capacity,
					consumables,
					vehicle
				);
			});
			currentPage = page;
		});
}

function DisplayVehicles(
	names,
	model,
	manufacturer,
	credits,
	length,
	speed,
	crew,
	passengers,
	capacity,
	consumables,
	vehicle
) {
	const html = `<div class="box"><h3>${names}</h3>
    <p> model : ${model}</p>
    <p> manufacturer : ${manufacturer}</p>
    <p> cost in credits : ${credits}</p>
	<p> length : ${length}</p>
	<p> max atmosphering speed : ${speed}</p>
	<p> crew : ${crew}</p>
	<p> passengers : ${passengers}</p>
	<p> cargo capacity : ${capacity}</p>
	<p> consumables : ${consumables}</p>
	<p> vehicle class : ${vehicle}</p>
    </div>`;
	document.querySelector("#container").innerHTML += html;
}

function FetchStarship(page) {
	fetch(`https://swapi.dev/api/starships/?page=${page}`)
		.then((response) => response.json())
		.then((RawData) => {
			RawData.results.forEach((Data) => {
				const names = Data.name;
				const model = Data.model;
				const manufacturer = Data.manufacturer;
				const credits = Data.cost_in_credits;
				const length = Data.length;
				const speed = Data.max_atmosphering_speed;
				const crew = Data.crew;
				const passengers = Data.passengers;
				const capacity = Data.cargo_capacity;
				const consumables = Data.consumables;
				const rating = Data.hyperdrive_rating;
				const MGLT = Data.MGLT;
				const starship = Data.starship_class;
				DisplayStarship(
					names,
					model,
					manufacturer,
					credits,
					length,
					speed,
					crew,
					passengers,
					capacity,
					consumables,
					rating,
					MGLT,
					starship
				);
			});
			currentPage = page;
		});
}

function DisplayStarship(
	names,
	model,
	manufacturer,
	credits,
	length,
	speed,
	crew,
	passengers,
	capacity,
	consumables,
	rating,
	MGLT,
	starship
) {
	const html = `<div class="box"><h3>${names}</h3>
    <p> model : ${model}</p>
    <p> manufacturer : ${manufacturer}</p>
    <p> cost in credits : ${credits}</p>
	<p> length : ${length}</p>
	<p> max atmosphering speed : ${speed}</p>
	<p> crew : ${crew}</p>
	<p> passengers : ${passengers}</p>
	<p> cargo capacity : ${capacity}</p>
	<p> consumables : ${consumables}</p>
	<p> hyperdive rating : ${rating}</p>
	<p> MGLT : ${MGLT}</p>
	<p> starship class : ${starship}</p>
    </div>`;
	document.querySelector("#container").innerHTML += html;
}

init();
