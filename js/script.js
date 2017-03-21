var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var name = document.querySelector(".contact-name");
var space = document.querySelector(".empty-space");
var form = popup.querySelector(".writeus-form");
var user_name = popup.querySelector("[name=user-name]");
var user_email = popup.querySelector("[name=user-email]");
var user_text = popup.querySelector("textarea");
var storage = localStorage.getItem("user_name");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  space.classList.add("empty-space-show");
  login.focus();
});

close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        space.classList.remove("empty-space-show");
        popup.classList.remove("writeus-form-error");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      space.classList.remove("empty-space-show");
      popup.classList.remove("writeus-form-error");
    }
  }
});

if (storage) {
  user_name.value = storage;
  user_email.focus();
} else {
  user_name.focus();
}

form.addEventListener("submit", function(event) {
 if (!user_name.value || !user_email.value || !user_text.value) {
 event.preventDefault();
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("writeus-form-error");
 } else {
  localStorage.setItem("user_name", user_name.value);
 }
});
