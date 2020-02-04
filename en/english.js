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


function body() {
	header({
		logo: {
			image: image_route,
			main: main_title,
			secondary: secondary_title,
			under: under_title
		},
		links: sections
    });
    
    document.getElementById("header").children[1].appendChild(
        object({type: "nav", class: "row", children: [
            object({type: "a", innerText: "English", href: "./"}),
            object({type: "text", innerText: "/"}),
            object({type: "a", innerText: "Español", href: "es"})
        ]})
    );
    start();
	home();

	//footer({ title: mainTag, links: footerLinks });
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

	objectToContent({ type: "h1", innerText: "Committees" });
	gaContainer = object({
		type: "div",
		classList: "committee-container"
	});
	allCommittees.forEach(committee => {
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
