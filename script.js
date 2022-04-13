const $formRating = document.querySelector("#rating-form");
const $submitted = document.querySelector("#submitted");
const $formOptions = document.querySelector("#form-options");
const $itemsRating = $formOptions.querySelectorAll("label");

function deleteIsActiveClass() {
  $itemsRating.forEach((item) => {
    item.classList.remove("is-active");
  });
}

function setTextSelected(option) {
  const textContainer = $submitted.querySelector(".submitted-response");
  textContainer.textContent = `You selected ${option} out of 5`;
}

$itemsRating.forEach((item) => {
  item.addEventListener("click", () => {
    deleteIsActiveClass();
    item.classList.toggle("is-active");
  });
});

$formOptions.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const optionSelected = $formOptions.rating.value;
  $submitted.classList.add("is-active");
  $formRating.classList.add("is-send");
  setTextSelected(optionSelected);
});
