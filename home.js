let form = document.getElementById("form")
let input = document.querySelector(".input-location").value
let button = document.querySelector(".form-btn")


let validate = (e) => {
console.log("I was hee ")
e.preventDefault()


if(input == "Nigeria" || "Lagos" || "Abuja" || "Port harcourt"){
    form.setAttribute("action", "gallery.html")
}
else{
    form.setAttribute("action", "creed.html")
}
}

button.addEventListener('click', validate)
