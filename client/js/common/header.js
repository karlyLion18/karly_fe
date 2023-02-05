let btn = document.getElementsByClassName("category__btn");
var i;

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var category__menubar = this.nextElementSibling;
    if (category__menubar.style.display === "block") {
      category__menubar.style.display = "none";
    } else {
      category__menubar.style.display = "block";
    }
  });
}

// for (i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("mouseout", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.remove("active");

//     /* Toggle between hiding and showing the active panel */
//     var category__menubar = this.nextElementSibling;
//     if (category__menubar.style.display === "block") {
//       category__menubar.style.display = "none";
//     } else {
//       category__menubar.style.display = "block";
//     }
//   });
// }

