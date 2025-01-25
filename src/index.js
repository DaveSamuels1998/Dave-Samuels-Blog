// set variable

// image img variable
const mainImages = document.querySelectorAll(".main-article img:not(figure *) ");
// modal body variable
const modalBody = document.querySelector(".modal");
// modal image variable
const modalImages = document.querySelector(".modal-img");
// modal text & close btn variable
const text = document.querySelector(".modal-text");
const close = document.querySelector(".closed");

// take ForEach loop in images to appear a classlist on their

mainImages.forEach((image) => {
 image.addEventListener('click', () => {
  modalBody.classList.add("active");

  // Individual Title and Individual photos

  modalImages.src = image.src;
  text.innerHTML = image.alt; 

  close.addEventListener('click', () => {
    modalBody.classList.remove("active");
  });
 });
});

