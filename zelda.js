const tooltip = document.querySelector(".tooltip");
const tooltiptext = document.querySelector(".tooltiptext");

tooltip.addEventListener("mouseover", function () {
  tooltiptext.style.display = "block";
});

tooltip.addEventListener("mouseout", function () {
  tooltiptext.style.display = "none";
});

const mostrarEnPosicion = function (event) {
  tooltiptext.style.top = event.clientY + "px";
  tooltiptext.style.left = event.clientX + "px";
};

tooltip.addEventListener("mousemove", function (event) {
  mostrarEnPosicion(event);
});
