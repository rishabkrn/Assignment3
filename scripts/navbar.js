/* width of the side navigation */
function openNav() {
    document.getElementById("sidenav").style.width = "400px";
}
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}


// toggle search drop down

function toggleSearch() {
    var e = document.getElementById("search");
    var c = document.getElementById("cattop-bg");
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');
    if (e.style.display == "block"){
        c.style.marginTop = "-80px";
    } else {
        c.style.marginTop = "0px";
      }

}
function toggleSearchProduct() {
    var e = document.getElementById("search");
    var i = document.getElementById("product-img");
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');
    if (e.style.display == "block"){
        i.style.marginTop = "-80px";
    } else {
        i.style.marginTop = "0px";
      }
}


// search enter input key listener 
  var input = document.getElementById("search");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("menu-furniture").click();
  }
});