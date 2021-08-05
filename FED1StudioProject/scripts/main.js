
/*********************************************
                Hamburger Menu
**********************************************/

    //Toggle Hamburger Menu Script
function toggleNav() {
    let navList = document.getElementById('nav-list');
    navList.classList.toggle('expanded');

    //Toggle Hamburger button/close button
    let btnMenu = document.getElementById('menu-btn');

    if (navList.classList.contains('expanded')) {
        btnMenu.innerHTML = "&times;";
    }
    else {
        btnMenu.innerHTML = "&#9776;";
    }
}