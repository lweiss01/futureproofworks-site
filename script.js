// Future Proof Works — year stamp + theme memory
var y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    if (!current) current = "dark";
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("fpw-theme", next); } catch (e) {}
  });
})();
