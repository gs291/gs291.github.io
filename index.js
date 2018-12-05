var showMenu = true;

function displayNavMenu() {
  var navContainer = document.querySelector('.navlist');
  if(showMenu === true) {
    navContainer.classList.remove('collapsed');
    showMenu = false;
  } else {
    navContainer.classList.add('collapsed');
    showMenu = true;
  }
}




document.addEventListener("DOMContentLoaded", function() {
  var navMenu = document.getElementById('nav-menu');
  navMenu.addEventListener('click', displayNavMenu);
});
