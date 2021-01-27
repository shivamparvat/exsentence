

navItem = document.querySelectorAll(".nav-link");

navItem.forEach(item => {
    item.addEventListener('click', event => {
    remove()
    event.target.classList.add("active")
  })
})

function remove() {
    navItem.forEach(item => { 
        item.classList.remove("active")
    })
}


