var buttonElement = document.getElementsByClassName("button");
Array.from(buttonElement).forEach(element => element.addEventListener("click", hamburgerMenuOpen));

var hamburgermenuElement = document.querySelector(".hamburger-menu");
var backdropElement = document.querySelector(".backdrop")
function hamburgerMenuOpen() {
    hamburgermenuElement.classList.add("open");
    backdropElement.classList.add("open");
}

document.body.addEventListener("keydown", keyPress);
function keyPress(e) {
    if (e.key === "Escape") {
        hamburgerMenuClose()
        closeModalPopup()
    }
}

var closeElement = document.querySelector(".close");
closeElement.addEventListener("click", hamburgerMenuClose);

function hamburgerMenuClose() {
    hamburgermenuElement.classList.remove("open");
    backdropElement.classList.remove("open");
}

document.body.addEventListener("click", clickOnScreen);
function clickOnScreen(event) {
    if (event.target.closest(".hamburger-control")) {
        return;
    }
    if (!event.target.closest(".hamburger-menu")) {
        hamburgerMenuClose()
    }
}

var disclaimerElement = document.querySelector(".disclaimer");
disclaimerElement.addEventListener("click", openModalPopup);

var modalWindow = document.querySelector(".modalWindow");

function openModalPopup() {
    modalWindow.classList.add("show");
    backdropElement.classList.add("show");
    document.body.style.overflow = "hidden";
    hamburgerMenuClose();
}

var crossElement = document.querySelectorAll(".cross");
Array.from(crossElement).forEach(element => element.addEventListener("click", closeModalPopup))
function closeModalPopup() {
    modalWindow.classList.remove("show");
    document.body.style.overflow = "auto";
    backdropElement.classList.remove("show");
}

document.body.addEventListener("click", clickOutSideModalWindow);

function clickOutSideModalWindow(event) {
    if (event.target && event.target.matches && event.target.matches(".modalWindow-control")) {
        return;
    }
    if (!event.target.closest(".modalWindow")) {
        closeModalPopup()
    }
}

var formElement = document.querySelector(".form");
formElement.addEventListener("submit", contentSubmit);

// function contentSubmit() {
//     var namevalue = document.getElementById("name").value;
//     var nameElement = document.getElementById("name");

//     if (!namevalue) {
//         nameElement.style.border =  "1px solid red";
//     }

//     var mailvalue = document.getElementById("mail").value;
//     var mailElement = document.getElementById("mail");

//     if (!mailvalue) {
//         mailElement.style.border =  "1px solid red";
//     }

//     var mobilevalue = document.getElementById("mobile-no").value;
//     var mobileElement = document.getElementById("mobile-no");

//     if (!mobilevalue) {
//         mobileElement.style.border =  "1px solid red";
//     }

//     var addressvalue = document.getElementById("address").value;
//     var addressElement = document.getElementById("address");

//     if (!addressvalue) {
//         addressElement.style.border =  "1px solid red";
//     }
// }

var alertElement = "";

function contentSubmit(event) {
    // var inputElements = document.getElementsByTagName("input");

    // Array.from(inputElements).forEach(element => {
    //     if(!element.value){
    //         element.style.border = "1px solid red";
    //     }
    // })

    // var inputElements = document.querySelectorAll(`[data-required="true"]`);
    Array.from(document.querySelectorAll(`[data-required="true"]`)).forEach(element => {
        if (!element.value) {
            element.style.border = "1px solid red";
        }
    });

    // in event.target mai form; and 
    // event.target.elements mai forms ke sare elements he so,event.target.elements likha he  

    Array.from(event.target.elements).forEach(element => {

        var allalertElement = `${element.getAttribute("name")} : ${element.value} \n`;

        alertElement = alertElement + allalertElement;
    })

    alert(alertElement);
}

