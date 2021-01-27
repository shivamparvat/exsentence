const sectionThirdDiv = document.createElement("div");
sectionThirdDiv.setAttribute("class", "sentence");
const sectionThird_Div = document.createElement("div");
sectionThird_Div.setAttribute("class", "col-md-9 col-sd-12 border");
const sectionThird_DivUl = document.createElement("ul");
sectionThird_DivUl.setAttribute("class", "nav nav-tabs");
const sectionThird_DivUlLi = document.createElement("li");
sectionThird_DivUlLi.setAttribute("class", "nav-item");
const sectionThird__UlLiA = document.createElement("a");
sectionThird__UlLiA.setAttribute("class", "nav-link active");
sectionThird__UlLiA.href="#"
const sectionThird__Ul = document.createElement("ul");
sectionThird__Ul.setAttribute("class", "listData");
section.appendChild(sectionThirdDiv);
sectionThirdDiv.appendChild(sectionThird_Div);
sectionThird_Div.appendChild(sectionThird_DivUl);
sectionThird_Div.appendChild(sectionThird__Ul);
sectionThird_DivUl.appendChild(sectionThird_DivUlLi);
sectionThird_DivUlLi.appendChild(sectionThird__UlLiA);


body.appendChild(section);