// Header
const /** !string */ image_route = "blacklogo.png";
const /** !string */ main_title = "TEC";
const /** !string */ secondary_title = "MUN";
const /** !string */ under_title = "XXXIV | Abril, 2020";

const /** !List<string> */ sections = [
		"home",
		"about",
		"committees",
		"archive",
		"contact"
	];

// Footer
const /** !string */ main_tag = "Committees";
const /** !Object<string, List<any>> */ titles_tags = {
		"General Assembly": general_assembly,
		"Special Committees": special_committees,
		"Crisis Committees": crisis_committees
	};

function body() {
	start();

	header({
		logo: {
			image: image_route,
			main: main_title,
			secondary: secondary_title,
			under: under_title
		},
		links: sections
	});

	home();

	footer({ title: main_tag, titles: titles_tags });
}

function home() {
	clearContent();

	objectToContent({ type: "h1", innerText: "Welcome" });
	objectToContent({
		type: "h2",
		innerText:
			"Meet the new generation of students commited with quality education and excelence."
	});
}

function about() {
	clearContent();
}

function committees() {
	clearContent();

	objectToContent({ type: "h1", innerText: "General Assembly" });
	gaContainer = object({
		type: "div",
		classList: "committee-container"
	});
	general_assembly.forEach(committee => {
		gaContainer.appendChild(
			object({
				type: "div",
				classList: "committee",
				onclick: "viewCommittee('" + committee.seralize() + "')",
				children: [
					object({ type: "h2", innerText: committee.abreviation }),
					object({ type: "h3", innerText: committee.name })
				]
			})
		);
	});
	append("content", gaContainer);
}

function viewCommittee(committee) {
	clearContent();
    information = committee.split(",");
    objectToContent({type: "div", classList: "committee-page", children: [
    object({ type: "h2", innerText: information[0] }),
	object({ type: "h3", innerText: information[1] }),
	object({ type: "h4", innerText: "Type: " + information[2] })]
})
	
}

function archive() {
	clearContent();
}

function contact() {
	clearContent();
}
