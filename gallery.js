const description = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < description.length; i++) {
  description[i].addEventListener("click", function () {
    let show_hide_description = this.nextElementSibling;
    if (show_hide_description.style.display === "block") {
      show_hide_description.style.display = "none";
    } else {
      show_hide_description.style.display = "block";
    }
  });
}
