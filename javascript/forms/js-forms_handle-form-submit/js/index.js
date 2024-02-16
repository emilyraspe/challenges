console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  //age-badness-sum
  let ageBadnessSum =
    parseInt(evt.target.elements.age.value) +
    parseInt(evt.target.elements.badness.value);
  console.log("The age-badness-sum is", ageBadnessSum);

  evt.target.elements.firstName.focus();
  evt.target.reset();
});
