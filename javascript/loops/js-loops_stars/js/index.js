console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const starImg = document.createElement("img");
    if (i <= filledStars) {
      starImg.setAttribute("src", "./assets/star-filled.svg");
    } else {
      starImg.setAttribute("src", "./assets/star-empty.svg");
    }
    starImg.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(starImg);
  }
}

renderStars();
