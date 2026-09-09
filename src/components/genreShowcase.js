import { GENRES_LIST } from "../data/books.js";

export function initGenreShowcase(containerId, onSelectGenre) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="genre-grid">
      ${GENRES_LIST.map((genre, idx) => `
        <button 
          type="button"
          class="genre-chip ${idx === 0 ? 'is--active' : ''}" 
          data-genre="${genre.name}"
          data-bg="${genre.bg}"
        >
          <span class="genre-chip-dot" style="background-color: ${genre.bg}"></span>
          <span class="genre-chip-name">${genre.name}</span>
          <span class="genre-chip-count">${genre.count}</span>
        </button>
      `).join("")}
    </div>
  `;

  const chips = container.querySelectorAll(".genre-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("is--active"));
      chip.classList.add("is--active");
      const genreName = chip.getAttribute("data-genre");
      if (onSelectGenre) onSelectGenre(genreName);
    });
  });
}
