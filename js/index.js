function init() {
	FetchPeople();
	FetchPlanet();
}

function FetchPeople() {
	fetch("https://swapi.dev/api/people/")
		.then(function (response) {
			return response.json();
		})
		.then(function (RawData) {
			RawData.results.forEach(function (Data) {
				const name = Data.name;
				const height = Data.height;
				const mass = Data.mass;
				const hair = Data.hair_color;
				const eye = Data.eye_color;
				const birth = Data.birth_year;
				const gender = Data.gender;
				DisplayPeople(name, height, mass, hair, eye, birth, gender);
			});
		});
}

function DisplayPeople(name, height, mass, hair, eye, birth, gender) {
	const html = ` <div class="box"><h3>${name}</h3>
	<p> height : ${height} cm</p>
	<p> mass : ${mass} kg</p>
	<p> hair color : ${hair}</p>
	<p> eye color : ${eye}</p>
	<p> birth year : ${birth}</p>
	<p>	gender : ${gender}</p>
	</div> 
	`;
	document.querySelector("#container").innerHTML += html;
}

function FetchPlanet() {
	fetch("https://swapi.dev/api/planets/")
		.then(function (response) {
			return response.json();
		})
		.then(function (RawData) {
			RawData.results.forEach(function (Data) {
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
	const html = ` <div class="box"><h3>${name}</h3>
	<p> rotation period : ${rotation} cm</p>
	<p> orbital period : ${orbital} kg</p>
	<p> diameter : ${diameter}</p>
	<p> climate : ${climate}</p>
	<p> gravity : ${gravity}</p>
	<p>	terrain : ${terrain}</p>
	<p>	terrain : ${population}</p>
	</div> 
	`;
	document.querySelector("#container").innerHTML += html;
}

init();
