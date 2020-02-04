// Header
const /** !string */ image_route = "../img/blacklogo.png";
const /** !string */ main_title = "TEC";
const /** !string */ secondary_title = "MUN";
const /** !string */ under_title = "XXXIV | April, 2020";

const /** !List<string> */ sections = [
		"home",
		"about",
		"committees",
		"archive",
		"contact"
	];

// Landing
const greeting = "Welcome";
const phrase_ = "Meet the new generation of students commited with quality education and excelence.";

// Committees
const title = "Committees";

function body() {
	main({
		logo: {
			image: image_route,
			main: main_title,
			secondary: secondary_title,
			under: under_title
		},
		links: sections
	});
	
	home();
}

function home() {
	landing({greet: greeting, phrase: phrase_})
}

function about() {
	clearContent();
}

function committees() {
	mainCommittees({title: title});
}

function viewCommittee(committee) {
	clearContent();
    information = committee.split("|");
    objectToContent({type: "div", classList: "committee-page", children: [
    object({ type: "h2", innerText: information[0] }),
    object({ type: "h3", innerText: information[1] }),
    object({ type: "h4", innerText: information[2] })]
})
	
}

function archive() {
	clearContent();
}

function contact() {
	clearContent();
}
