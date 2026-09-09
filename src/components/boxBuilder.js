import confetti from "canvas-confetti";

class BoxBuilder {
  constructor() {
    this.selectedBooks = [];
    this.maxBooks = 3;
    this.listeners = [];
    this.isOpen = false;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.getState()));
  }

  getState() {
    const count = this.selectedBooks.length;
    // $19.99 for first collector hardcover, $10.99 for each additional tome
    let subtotal = 0;
    if (count > 0) {
      subtotal = 19.99 + (count - 1) * 10.99;
    }
    const retailValue = count * 38.00; // Deluxe foil hardcover MSRP $38
    const savings = count > 0 ? (retailValue - subtotal) : 0;

    return {
      books: this.selectedBooks,
      count,
      max: this.maxBooks,
      isFull: count >= this.maxBooks,
      subtotal: subtotal.toFixed(2),
      savings: savings.toFixed(2),
      isOpen: this.isOpen
    };
  }

  toggleOpen(force) {
    this.isOpen = typeof force === "boolean" ? force : !this.isOpen;
    this.notify();
  }

  hasBook(bookId) {
    return this.selectedBooks.some(b => b.id === bookId);
  }

  addBook(book) {
    if (this.hasBook(book.id)) {
      this.removeBook(book.id);
      return false;
    }
    if (this.selectedBooks.length >= this.maxBooks) {
      this.showToast("Your Nocturne Vault is at capacity! Up to 3 deluxe tomes fit per velvet coffer.");
      this.toggleOpen(true);
      return false;
    }

    this.selectedBooks.push(book);
    this.notify();

    if (this.selectedBooks.length === this.maxBooks) {
      this.fireConfetti();
      this.showToast("⚜️ Vault Sealed! 3 gilded collector hardcovers ready for wax seal dispatch.");
    } else {
      this.showToast(`Added "${book.title}" to your Nocturne Vault!`);
    }

    // Automatically reveal box drawer on first addition
    if (this.selectedBooks.length === 1 && !this.isOpen) {
      this.toggleOpen(true);
    }
    return true;
  }

  removeBook(bookId) {
    const book = this.selectedBooks.find(b => b.id === bookId);
    this.selectedBooks = this.selectedBooks.filter(b => b.id !== bookId);
    this.notify();
    if (book) {
      this.showToast(`Removed "${book.title}" from your vault.`);
    }
  }

  clearBox() {
    this.selectedBooks = [];
    this.notify();
    this.showToast("Your vault selection has been cleared.");
  }

  showToast(message) {
    const toast = document.getElementById("app-toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is--active");
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.remove("is--active");
    }, 3200);
  }

  fireConfetti() {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.65 },
        colors: ["#D4AF37", "#F59E0B", "#881337", "#F3E5AB", "#E2E8F0"]
      });
    } catch {
      // Confetti fallback
    }
  }
}

export const boxBuilder = new BoxBuilder();
