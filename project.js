// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const closeBtn = document.querySelector(".close");

  // Add click event to each project card
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const imgSrc = card.querySelector("img").src;
      const title = card.querySelector(".overlay h3").innerText;
      const desc = card.querySelector(".overlay p").innerText;

      modal.style.display = "flex"; // show modal
      modalImg.src = imgSrc;
      modalTitle.innerText = title;
      modalDesc.innerText = desc;
    });
  });

  // Close modal when clicking X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside image box
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });
});
