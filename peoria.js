/**
 * @name PEORIA
 * @version 04.01.2020
 * @copyright Diego Palmerin Bonada
 * @fileoverview A lightweight framework that optimizes workflow when building
 * a website and streamlines a lot of time heavy tasks.
 */

/**
 * Options type for creating an element.
 * @typedef {{type: string, classList?: string, innerText?: string, onclick?: string, src?: string, style?: string, tabindex?: string, id?: string, child?: Element, children?: Element[]}} Options
 */

/**
 * Peoria function to create an Element.
 *
 * @param {Options} options - Configuration for element.
 *
 * @returns {Element} The created element.
 *
 * @example object({type: "h3", innerText: "This is neat!"})
 */
function object(options) {
	htmlObject = document.createElement(options.type);
	if (options.classList !== undefined) htmlObject.classList = options.classList;
	if (options.innerText !== undefined) htmlObject.innerText = options.innerText;
	if (options.href !== undefined) htmlObject.setAttribute("href", options.href);
	if (options.onclick !== undefined) htmlObject.setAttribute("onclick", options.onclick);
	if (options.src !== undefined) htmlObject.setAttribute("src", options.src);
	if (options.style !== undefined)
		htmlObject.setAttribute("style", options.style);
	if (options.tabindex !== undefined)
		htmlObject.setAttribute("tabindex", options.tabindex);
    if (options.id !== undefined) htmlObject.setAttribute("id", options.id);
    if (options.child !== undefined) htmlObject.appendChild(options.child);
    if (options.children !== undefined) options.children.forEach(child => {
        htmlObject.appendChild(child);
    });
	return htmlObject;
}

/**
 * Function to create a link that opens in a new tab in Peoria.
 *
 * @param {Options} options Any and all settings are optional.
 *
 * @returns {Element} The created element.
 *
 * @example link({type: "a", href: "https://www.google.com", innerText: "Use Cammel Case!"});
 */
function link(options) {
	linkObject = object(options);
	linkObject.setAttribute("target", "_blank");
	return linkObject;
}

/**
 * Function to append as a child an element to another one given it's id.
 *
 * @param {string} parent The id of the parent object.
 * @param {object} child The child object.
 *
 * @example append("header", headerObject);
 */
function append(parent, child) {
	document.getElementById(parent).appendChild(child);
}

/**
 * Function that creates a li element with an <a> tag inside of it.
 *
 * @param {string} text the text to put on the element.
 * @returns {Element} <li><a></a></li> element
 */
function createHeaderOption(text) {
	li = object({ type: "li" });
	li.appendChild(
		object({
			type: "a",
			classList: "header-link",
			innerText: text.toUpperCase(),
			onclick: text.toLowerCase() + "(), navLinks.classList.toggle('open')",
			tabindex: "0"
		})
	);
	return li;
}

/**
 * Function that creates a li element with an <a> tag inside of it.
 *
 * @param {string} text the text to put on the element.
 * @returns {Element} <li><a></a></li> element
 */
function createFooterOption(text) {
	li = object({ type: "li" });
	li.appendChild(
		object({
			type: "a",
			innerText: text.toUpperCase(),
			onclick:  text + "()",
			tabindex: "0"
		})
	);
	return li;
}

/** Removes all children from the object with the id "content". */
function clearContent() {
	content = document.getElementById("content");
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
}

/**
 * Adds an element to the body.
 *
 * @param {Element} element Object to append to content.
 */
function addToContent(element) {
	document.getElementById("content").appendChild(element);
}

/**
 * Creates an element and adds it to the content.
 *
 * @param {Options} options Object to append to content.
 */
function objectToContent(options) {
	addToContent(object(options));
}

/**
 * Adds the following elements to the body:
 *
 *  - <header id="header"></header>
 *  - <main id "content"></main>.
 *  - <footer id "footer"></footer>.
 */
function start() {	
	document.body.appendChild(object({ type: "main", id: "content" }));
}

/**
 * Options type for creating an element.
 * @typedef {{logo: {image?: string, main: string, secondary?: string, under?: string}, links: string[]}} headerOptions
 */

/**
 * Creates a header on the <header> element.
 * @param {headerOptions} options
 */
function header(options) {
    document.body.appendChild(object({ type: "header", id: "header" }));
    
    // Hamburger

	hamburger = object({
		type: "div",
		classList: "hamburger",
		onclick: "navLinks.classList.toggle('open')"
	});
	hamburger.appendChild(object({ type: "div", classList: "line" }));
	hamburger.appendChild(object({ type: "div", classList: "line" }));
	hamburger.appendChild(object({ type: "div", classList: "line" }));

    // Logo

    topDiv = object({ type: "div", classList: "topDiv" });

	if (options.logo.image !== undefined)
		topDiv.appendChild(object({ type: "img", src: "blacklogo.png" }));
	span = object({ type: "span", classList: "collumn" });

	if (options.logo.main !== undefined) {
		logo = object({
			type: "a",
			classList: "logo",
			innerText: options.logo.main
		});
		if (options.logo.secondary !== undefined)
			logo.appendChild(
				object({
					type: "span",
					classList: "text-primary",
					innerText: options.logo.secondary
				})
			);
		span.appendChild(logo);
	}
    topDiv.append(span);
    
	if (options.logo.under !== undefined)
		span.appendChild(object({ type: "h3", innerText: options.logo.under }));

    //Navigation Links
    
    navLinks = object({ type: "ul", classList: "nav-links" });
	options.links.forEach(text => {
		navLinks.appendChild(createHeaderOption(text));
	});

	//Append the items to content
    
    append("header", hamburger);
	append("header", topDiv);
	append("header", navLinks);
}

/** @typedef {{title?: string, links: string[]} footerOptions */

/**
 * Creates a footer on the <footer> element.
 * @param {footerOptions} options
 */
function footer(options) {
    document.body.appendChild(object({ type: "footer", id: "footer" }));

	if(options.title !== undefined) append("footer", object({ type: "h2", innerText: options.title }));
    
    mainDiv = object({ type: "div", classList: "row" });

	for (section in options.links) {
		col = object({ type: "div", classList: "column" });
		col.appendChild(object({ type: "h3", innerText: section }));
		span = object({ type: "span" });
		options.links[section].forEach(listLink => {
            span.appendChild(createFooterOption(listLink));
        });
		col.appendChild(span);
		mainDiv.appendChild(col);
    }
    
	append("footer", mainDiv);
}

document.cookie =
	"AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Lax";
