// changes the navbar css depending on if the screen has been scrolled
// down and back to original when scrolled to the top. 

window.onload = function () {
    scrolling()
}
window.onscroll = function () {
    scrolling()
}

function scrolling() {
    let myNav = document.getElementById('topnav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myNav.className = "navbartop"; //change this class to the new one to change on scroll
    } else {
        myNav.className = "navbartop";
    }
}