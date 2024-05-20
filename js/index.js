function init() {
	FetchAllData();

	document.getElementById("People").addEventListener("click", () => {
		clearContainer();
		currentCategory = "People";
		FetchPeople(1);
	});
	document.getElementById("Planets").addEventListener("click", () => {
		clearContainer();
		currentCategory = "Planets";
		FetchPlanet(1);
	});
	document.getElementById("Films").addEventListener("click", () => {
		clearContainer();
		currentCategory = "Films";
		FetchFilms(1);
	});

	document.getElementById("seeMore").addEventListener("click", () => {
		if (currentCategory === "People") {
			FetchPeople(currentPage + 1);
		} else if (currentCategory === "Planets") {
			FetchPlanet(currentPage + 1);
		} else if (currentCategory === "Films") {
			FetchFilms(currentPage + 1);
		}
	});
}

function FetchAllData() {
	FetchPeople(1, false);
	FetchPlanet(1, false);
	FetchFilms(1, false);
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

// Initialize the script
init();
