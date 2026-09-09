import { WAX_SEAL_SECRETS } from "../data/books.js";

export function initMascotEasterEgg() {
  const eggContainer = document.getElementById("mascot-easter-egg");
  if (!eggContainer) return;

  eggContainer.innerHTML = `
    <div class="wax-seal-widget">
      <div id="seal-bubble" class="seal-parchment-bubble">
        <span class="seal-bubble-close" id="bubble-close">×</span>
        <div class="seal-parchment-header">
          <span class="parchment-badge">Guild Lore & Secret</span>
        </div>
        <p id="seal-quote-text">“Nocturne tomes are bound with 120gsm Swedish acid-free archival parchment designed to outlive centuries.”</p>
        <div class="seal-bubble-footer">
          <span class="handwritten-hint">— Archivist of the Midnight Circle</span>
          <button id="seal-next-quote" class="btn-micro">Next Secret →</button>
        </div>
      </div>

      <button id="seal-toggle-btn" class="seal-trigger-btn" aria-label="Inspect Guild Wax Seal">
        <div class="wax-seal-stamp">
          <div class="wax-seal-core">
            <span class="seal-emblem">⚜️</span>
          </div>
          <div class="wax-seal-ring"></div>
        </div>
        <span class="seal-badge-pill">Guild Secret</span>
      </button>
    </div>
  `;

  let currentIdx = 0;
  const bubble = document.getElementById("seal-bubble");
  const quoteText = document.getElementById("seal-quote-text");
  const toggleBtn = document.getElementById("seal-toggle-btn");
  const closeBtn = document.getElementById("bubble-close");
  const nextBtn = document.getElementById("seal-next-quote");

  function setQuote(idx) {
    currentIdx = (idx + WAX_SEAL_SECRETS.length) % WAX_SEAL_SECRETS.length;
    quoteText.textContent = `“${WAX_SEAL_SECRETS[currentIdx]}”`;
  }

  toggleBtn.addEventListener("click", () => {
    bubble.classList.toggle("is--visible");
    if (bubble.classList.contains("is--visible")) {
      setQuote(Math.floor(Math.random() * WAX_SEAL_SECRETS.length));
    }
  });

  closeBtn?.addEventListener("click", () => {
    bubble.classList.remove("is--visible");
  });

  nextBtn?.addEventListener("click", () => {
    setQuote(currentIdx + 1);
  });
}
