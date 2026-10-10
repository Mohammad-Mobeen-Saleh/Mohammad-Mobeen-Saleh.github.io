const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");


menuButton.addEventListener("click", function () {

    const menuIsOpen = mainNav.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

    menuButton.textContent = menuIsOpen
        ? "Schliessen"
        : "Menü";

});


mainNav.addEventListener("click", function (event) {

    if (event.target.tagName === "A") {

        mainNav.classList.remove("is-open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "Menü";

    }

});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        mainNav.classList.remove("is-open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "Menü";

    }

});