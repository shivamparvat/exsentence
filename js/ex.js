const searchData = document.querySelector("#search");
const dataList = document.querySelector(".listData");
const webLink ="http://127.0.0.1:5500/"
// const webLink ="https://shivamgoswami2711.github.io/exsentense/"
const autocomplete = document.querySelector("#autocomplete-list")
const suggestionUl = document.querySelector(".nav-tabs")


//  create suggestionTab

function suggestionTab(value,data) {
  const listUl = document.createElement("ul");
  dataList.appendChild(listUl);
  for (var key in data[value]) {
        const list = document.createElement("li");
        listUl.setAttribute("class", "tabcontent none");
        listUl.setAttribute("id", value);
        list.textContent = data[value][key];
    listUl.appendChild(list);
  }  
  document.querySelectorAll(".tabcontent")[0].classList.remove("none")
}

// //  create autocom

function autoText(result, data) {
  autocomplete.textContent=" "
  for (var i=0; i < 20; i++) {
    const divCh = document.createElement("div");
    divCh.setAttribute("class","autoLiks")
    const divA = document.createElement("a");
    divA.setAttribute("class", "auto_anchor");
    divA.textContent=result[i].item
    autocomplete.append(divCh)
    divCh.append(divA)
  }
  throttle(textsuggestion(result,data), 500);
  throttle(listremove(), 500);
}


function textsuggestion(result, data) {
  suggestionUl.textContent = "";
  dataList.textContent = "";
  if (result.length>=5) {
    for (var i = 0; i < 5; i++){
      const value = result[i].item;
      throttle(suggestionTab(value,data), 500);
      throttle(createItam(value), 500);
    }
  } 


  // tab item
  function createItam(value) {
    const sectionThird_DivUlLi = document.createElement("li");
    sectionThird_DivUlLi.setAttribute("class", "nav-item tablinks");
    const sectionThird__UlLiA = document.createElement("a");
    sectionThird__UlLiA.setAttribute("class", "nav-link");
    sectionThird__UlLiA.setAttribute("id", value);
    sectionThird__UlLiA.onclick=(e)=>addActiveClass(e)
    sectionThird__UlLiA.href="#"
    sectionThird__UlLiA.textContent = value
    suggestionUl.appendChild(sectionThird_DivUlLi);
    sectionThird_DivUlLi.appendChild(sectionThird__UlLiA)
    document.querySelectorAll(".nav-link")[0].classList.add("active")
  }
}
// ######


autocomplete.addEventListener("click", e => {
  // console.log(e.target.innerText)
  e.target.href= webLink+"datafile"+e.target.innerText
})


// throttling function 


function throttle(func, delay) {
  let timeout = null
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.call(this, ...args)
        timeout = null
      }, delay)
    }
  }
}

//  add active class in tab 

function addActiveClass(event) {
  const navItem = document.querySelectorAll(".nav-link")
  seeData(event.target)
  navItem.forEach(item => { 
        item.classList.remove("active")
    })
  event.target.classList.add("active");
}
//  remove none class in contant  

function seeData(e) {
  const tabcontent = document.querySelectorAll(".tabcontent")
  tabcontent.forEach(item => {
     item.classList.add("none")
    if (e.innerText==item.id) {
     item.classList.remove("none")
    }
  })
}
function listremove() {
  const autocomplete_list = document.querySelectorAll(".autoLiks");
  autocomplete_list.forEach(item => {
    item.addEventListener("click", (e) => {
      e.target.parentNode.textContent = "";
    })
  })
}