
document.body.onkeyup = function(event) {
  console.log(event.keyCode);
  if (event.keyCode == 68) {
    // change class of body to dark mode in (css)
    document.body.classList.toggle("dark");
  }
}