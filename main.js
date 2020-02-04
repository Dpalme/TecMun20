// Header
const /** !string */ image_route = "blacklogo.png";
const /** !string */ main_title = "TEC";
const /** !string */ secondary_title = "MUN";
const /** !string */ under_title = "XXXIV | Abril, 2020"

const /** !List<string> */ sections = ["home", "about", "committees", "archive", "contact"];


// Footer
const /** !string */ main_tag = "Committees";
const /** !Object<string, List<any>> */ titles_tags = {
    "General Assembly": general_assembly,
    "Special Committees": special_committees,
    "Crisis Committees": crisis_committees
};

function body(){
    start();

    header({
        logo: {image: image_route, main: main_title, secondary: secondary_title, under: under_title},
        links: sections
    });
    
    home();

    footer({title: main_tag, titles: titles_tags});
}

function home(){
    clearContent();

    objectToContent({type: "h1", innerText: "Welcome"});
    objectToContent({type: "h2", innerText: "Meet the new generation of students commited with quality education and excelence."})
    objectToContent({type: "video", src: "https://www.youtube.com/embed/czP3xGYrG6Y"})
}

function about(){
    clearContent();
}

function committees(){
    clearContent();
}

function archive(){
    clearContent();
}

function contact(){
    clearContent();
}