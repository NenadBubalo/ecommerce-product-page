/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    let x = document.getElementById("navigation");
    let img = document.getElementById('icon-openClose');
    if (x.style.display === "flex") {
        x.style.display = "none";
        img.src = "/images/icon-menu.svg";
    } else {
        x.style.display = "flex";
        img.src = "/images/icon-close.svg";
    }
}