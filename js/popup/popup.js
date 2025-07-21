const popup = document.querySelector(".popup");
const popupBody = document.querySelector(".popup-body");
const popupCancel = document.querySelector(".popup-cancel");
const popupApply = document.querySelector(".popup-apply");
const showPopup = document.querySelector(".popup-open");

showPopup.addEventListener("click", () => {
  popup.classList.add("active");
});

popupCancel.addEventListener("click", () => {
  popup.classList.remove("active");
});

popupApply.addEventListener("click", () => {
  popup.classList.remove("active");
});

popup.addEventListener("click", e => {
  if(e.target !== popupBody) {
    popup.classList.remove("active");
  }
});
