import { boxBuilder } from "./boxBuilder.js";
import { render3DBookModalViewer } from "./threeBookModalViewer.js";

export function initBookModal() {
  const modal = document.getElementById("book-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBody = document.getElementById("modal-body");

  let active3DViewer = null;

  if (!modal || !modalCloseBtn) return;

  function closeModal() {
    if (active3DViewer) {
      active3DViewer.destroy();
      active3DViewer = null;
    }
    modal.classList.remove("is--open");
    document.body.classList.remove("modal-open");
  }

  modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is--open")) {
      closeModal();
    }
  });

  return {
    open(book) {
      if (active3DViewer) {
        active3DViewer.destroy();
        active3DViewer = null;
      }

      const isInBox = boxBuilder.hasBook(book.id);
      const state = boxBuilder.getState();
      const isFull = state.isFull && !isInBox;

      modalBody.innerHTML = `
        <div class="modal-card" style="--book-color: ${book.coverColor}; --accent-color: ${book.accentColor}">
          <div class="modal-filigree-header">
            <span class="filigree-ornament">⚜️</span>
            <span class="filigree-rule"></span>
            <span class="filigree-label">NOCTURNE GUILD ARCHIVE</span>
            <span class="filigree-rule"></span>
            <span class="filigree-ornament">⚜️</span>
          </div>

          <div class="modal-grid">
            <div class="modal-cover-side">
              <div class="book-spine-preview" style="background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(10,12,20,0.9) 100%); overflow: hidden; position: relative;">
                <div id="modal-3d-book-canvas" style="width: 100%; height: 340px; display: flex; align-items: center; justify-content: center;"></div>
                <div class="drag-hint-pill">
                  <span>✨ Drag to inspect 3D Gilded Foil Tome</span>
                </div>
              </div>

              <div class="modal-quick-meta">
                <div class="meta-item">
                  <span class="meta-label">Pages</span>
                  <span class="meta-val">${book.details.pages}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Release</span>
                  <span class="meta-val">${book.details.publishDate}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Edition</span>
                  <span class="meta-val">Deluxe Gilded Foil</span>
                </div>
              </div>
            </div>

            <div class="modal-content-side">
              <div class="modal-header-info">
                <div class="book-tags-row">
                  ${book.tags.map(t => `<span class="tag-pill" style="background:${t.bg}; color:${t.color}">${t.text}</span>`).join("")}
                </div>
                <h2 class="modal-title">${book.title}</h2>
                <p class="modal-author">Penned by <strong>${book.author}</strong></p>
                <p class="modal-tagline">“${book.tagline}”</p>
              </div>

              <div class="modal-synopsis">
                <h4>Archive Synopsis</h4>
                <p>${book.synopsis}</p>
              </div>

              <div class="modal-prompt-box">
                <span class="prompt-icon">🕯️</span>
                <div>
                  <strong>Midnight Guild Conclave Prompt</strong>
                  <p>${book.discussionPrompt}</p>
                </div>
              </div>

              <div class="modal-quote">
                <p>${book.quote}</p>
              </div>

              <div class="modal-actions">
                <button 
                  id="modal-toggle-box-btn" 
                  class="btn-primary ${isInBox ? 'is--in-box' : ''}" 
                  ${isFull ? 'disabled' : ''}
                >
                  ${isInBox ? '✓ In Your Vault (Remove)' : isFull ? 'Vault Sealed (3 Max)' : '+ Add to Nocturne Vault'}
                </button>
                <button id="modal-close-secondary-btn" class="btn-ghost">Return to Gallery</button>
              </div>
            </div>
          </div>
        </div>
      `;

      // Mount Three.js 3D viewer
      setTimeout(() => {
        active3DViewer = render3DBookModalViewer("modal-3d-book-canvas", book);
      }, 50);

      const toggleBtn = document.getElementById("modal-toggle-box-btn");
      if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
          boxBuilder.addBook(book);
          const updatedInBox = boxBuilder.hasBook(book.id);
          const updatedState = boxBuilder.getState();
          toggleBtn.textContent = updatedInBox ? '✓ In Your Box (Remove)' : updatedState.isFull ? 'Box is Full (3 Max)' : '+ Add to Monthly Box';
          toggleBtn.classList.toggle("is--in-box", updatedInBox);
        });
      }

      const secondaryClose = document.getElementById("modal-close-secondary-btn");
      if (secondaryClose) {
        secondaryClose.addEventListener("click", closeModal);
      }

      modal.classList.add("is--open");
      document.body.classList.add("modal-open");
    }
  };
}
