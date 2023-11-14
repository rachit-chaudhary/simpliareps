const menuBtn = document.querySelector(".menu-square")
const nav = document.querySelector(".navigation-rc")

menuBtn.addEventListener("click", showNavMenu)

function showNavMenu() {
    if(nav.style.display === "block") {
        nav.style.display = "none"
        menuBtn.src = "assets/images/square.svg"
    } else {
        nav.style.display = "block"
        menuBtn.src = "assets/images/menu-close-btn.svg"
    }
}