// content variable

const webName = "EXSENTANSE"
const heading = "SEARCH A WORD"
const discription = "search word and get how to use word in srntanse "
const placeholder ="search"

const body = document.querySelector("body");

// nav bar
const nav = document.createElement("nav");
nav.setAttribute("class", "navbar navbar-dark bg-primary");

const navDiv = document.createElement("div");
navDiv.setAttribute("class", "container-fluid");

const navA = document.createElement("a");
navA.setAttribute("class", "navbar-brand");
navA.textContent = webName;
nav.appendChild(navDiv);
navDiv.appendChild(navA);
body.appendChild(nav);


// section
const section = document.createElement("main");

// fisrt section
const sectionDiv = document.createElement("div");
sectionDiv.setAttribute("class", "textCantainer");
const sectionDivH1 = document.createElement("h1");
sectionDivH1.textContent = heading;
const sectionP = document.createElement("p");
sectionP.textContent = discription;
section.appendChild(sectionDiv)
sectionDiv.appendChild(sectionDivH1)
sectionDiv.appendChild(sectionP)

// secand section
const sectionDivSecand = document.createElement("div");
const sectionDivSecandDiv = document.createElement("div");
sectionDivSecandDiv.setAttribute("class", "search_fild");
const sectionDivSecandDivForm = document.createElement("form");
sectionDivSecandDivForm.setAttribute("class", "d-flex");
const sectionDivSecandDivFormDiv = document.createElement("div");
sectionDivSecandDivFormDiv.setAttribute("class", "autocomplete");
const divautocomplete = document.createElement("div");
divautocomplete.setAttribute("id", "autocomplete-list");
divautocomplete.setAttribute("class", "autocomplete-items");
// _ => div
const section_Secand_Form_Input = document.createElement("input");
section_Secand_Form_Input.setAttribute("class", "form-control me-2");
section_Secand_Form_Input.setAttribute("id", "search");
section_Secand_Form_Input.setAttribute("type", "search");
section_Secand_Form_Input.setAttribute("placeholder", placeholder); 
section_Secand_Form_Input.setAttribute("aria-label", "search");     
section_Secand_Form_Input.setAttribute("autocomplete", "off");
section.appendChild(sectionDivSecand);
sectionDivSecand.appendChild(sectionDivSecandDiv);
sectionDivSecandDiv.appendChild(sectionDivSecandDivForm);
sectionDivSecandDivForm.appendChild(sectionDivSecandDivFormDiv);
sectionDivSecandDivFormDiv.appendChild(section_Secand_Form_Input);
sectionDivSecandDivFormDiv.appendChild(divautocomplete);


// section third

body.appendChild(section);