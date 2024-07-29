function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll("div");
  elements.forEach(function (element) {
    element.style.backgroundColor = getRandomColor();
  });
});
