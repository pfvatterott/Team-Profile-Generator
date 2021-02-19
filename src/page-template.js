
let cardWrapper = document.querySelector("#cardWrapper");
let employeeCard = document.querySelector("#employeeCard");

function createCard() {
    $("#employeeCard").clone().appendTo(cardWrapper)
}

createCard()