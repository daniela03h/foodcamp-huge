const sendCardButton = document.querySelector(".send-card");
const modal = document.querySelector(".modal");
const modalCancelButton = document.querySelector(".modal-cancel");
const modalContinueButton = document.querySelector(".modal-continue");
const modalTextInput = document.querySelector(".modal-text");
const modalError = document.querySelector(".modal-error");
const cardSent = document.querySelector(".card-sent");
const cardName = document.querySelector("#card-name");

sendCardButton.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

modalCancelButton.addEventListener("click", function () {
  modal.classList.add("hidden");
});

modalContinueButton.addEventListener("click", function () {
  if (modalTextInput.value === "") {
    modalError.classList.remove("hidden");
    return;
  }

  modal.classList.add("hidden");
  cardSent.classList.remove("hidden");
  cardName.innerHTML = modalTextInput.value + " ! ";
});
