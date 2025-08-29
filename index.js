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
//* function to get inner text
function getInnerText(id) {
  return document.getElementById(id).innerText;
}
//* function for add event listener for increasing heart count
function addEventListenerToIncreaseHeart(id) {
  document.getElementById(id).addEventListener("click", function () {
    let heartCount = Number(getInnerText("heart-count"));
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
    console.log("clicked");
  });
}

//* function calling
addEventListenerToIncreaseHeart("heart1");
addEventListenerToIncreaseHeart("heart2");
addEventListenerToIncreaseHeart("heart3");
addEventListenerToIncreaseHeart("heart4");
addEventListenerToIncreaseHeart("heart5");
addEventListenerToIncreaseHeart("heart6");
addEventListenerToIncreaseHeart("heart7");
addEventListenerToIncreaseHeart("heart8");
addEventListenerToIncreaseHeart("heart9");
