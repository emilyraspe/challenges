console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
//create Element
const section = document.createElement("section");
const text = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

// EventListener for button
button.addEventListener("click", handleLikeButtonClick);

//Add Element
document.body.append(section);
section.append(text);
section.append(footer);
footer.append(span);
footer.append(button);

//Add
text.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
button.textContent = "♥ Like";
span.textContent = "@username";

// classes
section.classList.add("post");
text.classList.add("post__content");
footer.classList.add("post__footer");
span.classList.add("post__username");
button.classList.add("post__button");
