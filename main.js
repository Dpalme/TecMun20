//Logo
image_route = "blacklogo.png";
main_title = "TEC";
secondary_title = "MUN";
under_title = "XXXIV | Abril, 2020"

sections = ["Home", "About Us", "Committees", "Archive", "Contact"];


//Footer
main_tag = "Committees";
titles_tags = {
    "General Assembly": general_assembly,
    "Special Committees": special_committees,
    "Crisis Committees": crisis_committees
};

function body(){
    content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    header({
        logo: {image: image_route, main: main_title, secondary: secondary_title, under: under_title},
        links: sections
    });

    footer({title: main_tag, titles: titles_tags});
}