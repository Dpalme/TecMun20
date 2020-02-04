// Header
const /** !string */ image_route = "../img/blacklogo.png";
const /** !string */ main_title = "TEC";
const /** !string */ secondary_title = "MUN";
const /** !string */ under_title = "XXXIV | Abril, 2020";

const /** !List<string> */ sections = [
		"inicio",
		"nosotros",
		"comités",
		"archivo",
		"contacto"
	];

// Landing
const greeting = "Bienvenid@";
const phrase_ = "Conoce a la nueva generación de estudiantes comprometidos con la educación de calidad y excelencia." ;

// Comités
const title = "Comités";

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
	
	inicio();
	//footer({ title: mainTag, links: footerLinks });
}

function inicio() {
	clearContent();

	objectToContent({ type: "h1", innerText: greeting });
	objectToContent({
		type: "h2",
		innerText: phrase_
	});
}

function nosotros() {
	clearContent();
}

function comités() {
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

function archivo() {
	clearContent();
}

function contacto() {
	clearContent();
}
