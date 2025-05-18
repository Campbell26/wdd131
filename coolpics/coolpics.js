document.addEventListener('DOMContentLoaded', () => {
  // Menu Toggle (Part 2 Step 1)
  const menuButton = document.getElementById("menu-button");
  const menu = document.querySelector(".menu");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
  });

  // Window Resize Handling (Part 2 Step 2)
  function handleResize() {
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  // Image Viewer Modal
  const gallery = document.querySelector(".gallery");
  const modal = document.querySelector("#viewer");
  const modalImg = document.querySelector("#viewer-img");
  const closeButton = document.querySelector(".close-viewer");

  // Ensure modal is closed on page load
  modal.close();
  modalImg.src = "";
  modalImg.alt = "";

  function handleImageClick(event) {
    const img = event.target.closest("img");
    if (img) {
      const src = img.src.split("-sm.jpeg")[0] + "-full.jpeg";
      const alt = img.alt;
      modalImg.src = src;
      modalImg.alt = alt;
      modal.showModal();
    }
  }

  function closeModal() {
    modal.close();
    modalImg.src = "";
    modalImg.alt = "";
  }

  gallery.addEventListener("click", handleImageClick);
  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});