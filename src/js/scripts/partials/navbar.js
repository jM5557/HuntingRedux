
let responsiveNavbar = function () {
    // Header/Navbar
    var navbarDefaultState = 'CLOSED';

    $("#menu-btn, #close-menu").click(function () { 
        navbarDefaultState = (navbarDefaultState === 'OPEN') ? 'CLOSED' : 'OPEN';
        $("#nav-menu").attr('class', navbarDefaultState);
    });
}

export default responsiveNavbar;