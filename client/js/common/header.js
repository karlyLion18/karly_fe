let btn = document.getElementsByClassName("category__btn");
var i;

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var hover = this.nextElementSibling;
    if (hover.style.display === "block") {
      hover.style.display = "none";
    } else {
      hover.style.display = "block";
    }
  });
}