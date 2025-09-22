const menuOpenButton = document.querySelector("#menu-open-button");

const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

menuCloseButton.addEventListener("click", () => {
    // Close menu when the close button is clicked
    document.body.classList.toggle("show-mobile-menu");
})