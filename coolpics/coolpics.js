document.addEventListener('DOMContentLoaded', () => {
  // Menu Toggle (Part 2 Step 1)
  const menuButton = document.getElementById("menu-button");
  const menu = document.querySelector(".menu");

  if (menuButton && menu) {
    // Existing event listener (to be replaced)
    menuButton.addEventListener("click", () => {
      console.log("Menu button clicked");
      menu.classList.toggle("show");
      console.log("Menu classes after toggle:", menu.classList.toString());
    });

    // Add new event listener as per assignment instructions
    menuButton.addEventListener("click", () => {
      console.log("New event listener - Menu button clicked");
      menu.classList.toggle("hide");
      console.log("Menu classes after new toggle:", menu.classList.toString());
    });

    // Ensure menu is hidden on small screens at page load
    if (window.innerWidth <= 1000) {
      menu.classList.remove("show");
      menu.classList.add("hide");
      console.log("Page load on small screen - Menu classes:", menu.classList.toString());
    }
  } else {
    console.error("Menu button or menu not found");
  }

  // Window Resize Handling (Part 2 Step 2)
  function handleResize() {
    if (menu) {
      if (window.innerWidth > 1000) {
        menu.classList.add("show");
        menu.classList.remove("hide");
      } else {
        // On small screens, hide the menu by default
        menu.classList.remove("show");
        menu.classList.add("hide");
      }
      console.log("Window width:", window.innerWidth, "Menu classes:", menu.classList.toString());
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  // Image Viewer (Part 2 Step 4)
  const gallery = document.querySelector('.gallery');
  const modal = document.getElementById('viewer');
  const modalImg = document.getElementById('viewer-img');
  const closeBtn = modal ? modal.querySelector('.close-viewer') : null;

  // Ensure modal is closed on page load
  if (modal) {
    modal.close();
    modal.removeAttribute("open");
    if (modalImg) {
      modalImg.src = "";
      modalImg.alt = "";
    }
  }

  if (gallery && modal && modalImg && closeBtn) {
    gallery.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (!img) {
        console.error("No image found for click event");
        return;
      }
      console.log("Clicked image src:", img.src);
      const src = img.getAttribute('src');
      // Derive full image path: replace '-sm.jpeg' with '-full.jpeg'
      const fullSrc = src.replace('-sm.jpeg', '-full.jpeg');
      console.log("Transformed full src:", fullSrc);
      modalImg.src = fullSrc;
      modalImg.alt = img.alt || "Full-size image";
      try {
        modal.showModal();
        console.log("Modal opened successfully");
      } catch (error) {
        console.error("Error opening modal:", error);
      }
    });

    closeBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      try {
        modal.close();
        modal.removeAttribute("open");
        modalImg.src = "";
        modalImg.alt = "";
        console.log("Modal closed successfully via close button");
      } catch (error) {
        console.error("Error closing modal via close button:", error);
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        try {
          modal.close();
          modal.removeAttribute("open");
          modalImg.src = "";
          modalImg.alt = "";
          console.log("Modal closed successfully via background click");
        } catch (error) {
          console.error("Error closing modal via background click:", error);
        }
      }
    });
  } else {
    console.error('Gallery modal elements not found:', {
      gallery: !!gallery,
      modal: !!modal,
      modalImg: !!modalImg,
      closeBtn: !!closeBtn
    });
  }
});