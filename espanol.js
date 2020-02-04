// Header
const /** !string */ image_route = "blacklogo.png";
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
            object({type: "a", innerText: "Español", href: "es.html"})
        ]})
    );
    start();
	inicio();

	//footer({ title: mainTag, links: footerLinks });
}

function inicio() {
	clearContent();

	objectToContent({ type: "h1", innerText: "Bienvenid@" });
	objectToContent({
		type: "h2",
		innerText:
            "Conoce a la nueva generación de estudiantes comprometidos con la educación de calidad y excelencia."    
	});
}

function nosotros() {
	clearContent();
}

function comités() {
	clearContent();

	objectToContent({ type: "h1", innerText: "Comités" });
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

function archivo() {
	clearContent();
}

function contacto() {
	clearContent();
}
