function init() {
	FetchPeople();
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

init();
