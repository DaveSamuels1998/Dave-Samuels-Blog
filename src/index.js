document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeModal = document.getElementById("close-modal");
  const imageTriggers = document.querySelectorAll(".image-modal-trigger");

  // Open modal on image click
  imageTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      const img = trigger.querySelector("img");
      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modal.classList.remove("hidden");
    });
  });

  // Close modal on button click
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalImage.src = "";
    modalImage.alt = "";
  });

  // Close modal on outside click
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
      modalImage.src = "";
      modalImage.alt = "";
    }
  });
});
