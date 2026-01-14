// Navbar User Onclick Func
function clickProfileMenu(){ 
  document.getElementById("Menu").classList.toggle("hidden");                       
}

// Sidebar User Onclick Func

const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');

menuBtn.addEventListener('click', () => {
  sideNav.classList.toggle('hidden');


});