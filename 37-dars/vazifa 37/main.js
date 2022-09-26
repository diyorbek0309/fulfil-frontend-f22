function showHide(element, id, className) {
  element.addEventListener("click", (e) => {
    document.querySelector(id).classList.toggle(className);
    element.classList.toggle("fa-angle-up");
  });
}

showHide(document.querySelector(".angleB"), "#brends", "sectionOpenb");
showHide(document.querySelector(".angleSh"), "#shop", "sectionOpenSh");
showHide(document.querySelector(".angleH"), "#help", "sectionOpenH");

// UI - user interface

// angleBrend.addEventListener("click", (e) => {
//   document.querySelector("#brends").classList.toggle("sectionOpenb");
//   angleBrend.classList.toggle("fa-angle-up");
// });

// angleShop.addEventListener("click", (e) => {
//   document.querySelector("#shop").classList.toggle("sectionOpenSh");
//   angleShop.classList.toggle("fa-angle-up");
// });

// angleHelp.addEventListener("click", (e) => {
//   document.querySelector("#help").classList.toggle("sectionOpenH");
//   angleHelp.classList.toggle("fa-angle-up");
// });
