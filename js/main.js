function main(options) {
	header(options);
    
    document.getElementById("header").children[1].appendChild(
        object({type: "nav", class: "row", children: [
            object({type: "a", innerText: "English", href: "../en"}),
            object({type: "text", innerText: "/"}),
            object({type: "a", innerText: "Español", href: "../es"})
        ]})
    );
    start();

	//footer({ title: mainTag, links: footerLinks });
}

function landing(options) {
	clearContent();

	objectToContent({ type: "h1", innerText: options.greet });
	objectToContent({
		type: "h2",
		innerText: options.phrase
	});
}

function about() {
	clearContent();
}

function mainCommittees(options) {
	clearContent();

	objectToContent({ type: "h1", innerText: options.title });
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
					object({ type: "h3", innerText: committee.name }),
					object({ type: "p", innerText: committee.council })
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
