document.getElementById("hamburger-icon").addEventListener("click", function() {
  toggleMobileNavMenu();
  var darkOverlay = document.getElementById("dark-overlay");
  darkOverlay.style.display = darkOverlay.style.display === "block" ? "none" : "block";
})

document.getElementById("dark-overlay").addEventListener("click", function() {
  toggleMobileNavMenu();
  this.style.display = "none";
})

const toggleMobileNavMenu = () => {
  document.getElementById("hamburger-icon").classList.toggle("active");
  document.querySelector(".header-nav-items").classList.toggle("active");
}
