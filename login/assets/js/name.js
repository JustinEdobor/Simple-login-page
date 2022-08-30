     function save() {
     var key = document.getElementById("name").value;
        sessionStorage.setItem("store", key);
        }
        
     document.getElementById("username").innerHTML = sessionStorage.getItem("store");
     
function MobileMenu(menu) {
    menu.classList.toggle('open');
}