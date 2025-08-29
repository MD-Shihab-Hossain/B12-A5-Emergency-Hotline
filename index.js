//* responsive mobile menu
document.getElementById("cross-icon").addEventListener("click", function () {
  document.getElementById("cross-icon").classList.add("hidden");
  document.getElementById("menu-icon").classList.add("flex");
  document.getElementById("menu-icon").classList.remove("hidden");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.remove("flex");
  mobileMenu.classList.add("hidden");
});

document.getElementById("menu-icon").addEventListener("click", function () {
  document.getElementById("menu-icon").classList.add("hidden");
  document.getElementById("cross-icon").classList.add("block");
  document.getElementById("cross-icon").classList.remove("hidden");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
});
