// TOGGLE &RESPONSIVE NAVIGATION
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navlist = document.querySelector("nav");
    
    burger.addEventListener("click", () => {
        navlist.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};
navSlide();

// CLEAR FORM BEFORE UNLOAD
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}