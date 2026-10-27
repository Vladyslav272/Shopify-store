/**
 * Veaskin Landing Page Interactive Components
 * Checklist Web Component + Smooth Anchor Scrolling
 */

// 1. Checklist Web Component
if (!customElements.get("zm-checklist")) {
  customElements.define("zm-checklist", class extends HTMLElement {
    connectedCallback() {
      this.threshold = parseInt(this.dataset.threshold, 10) || 2;
      this.inputs = Array.from(this.querySelectorAll('input[type="checkbox"]'));
      this.result = this.querySelector("[data-result]");
      this.count = this.querySelector("[data-count]");
      this.countValue = this.querySelector("[data-count-value]");
      this.progress = this.querySelector("[data-progress]");
      
      this.addEventListener("change", () => {
        this.stopNudge();
        this.update();
      });
      
      this.update();
      if (this.hasAttribute("data-nudge")) {
        this.setupNudge();
      }
    }
    
    disconnectedCallback() {
      if (this.observer) this.observer.disconnect();
    }
    
    update() {
      const checked = this.inputs.filter(input => input.checked).length;
      const reached = checked >= this.threshold;
      
      this.inputs.forEach(input => {
        const li = input.closest("li");
        if (li) li.classList.toggle("is-checked", input.checked);
      });
      
      if (this.countValue) this.countValue.textContent = checked;
      if (this.count) this.count.classList.toggle("is-reached", reached);
      if (this.progress) {
        this.progress.style.width = `${(checked / (this.inputs.length || 1)) * 100}%`;
      }
      if (this.result) {
        this.result.classList.toggle("is-reached", reached);
      }
    }
    
    setupNudge() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const list = this.querySelector("ul");
      if (!list || !("IntersectionObserver" in window)) return;
      
      this.observer = new IntersectionObserver(entries => {
        if (this.inputs.some(input => input.checked)) return this.stopNudge();
        this.classList.toggle("is-nudging", entries[entries.length - 1].intersectionRatio >= 0.35);
      }, { threshold: 0.35 });
      
      this.observer.observe(list);
    }
    
    stopNudge() {
      if (this.observer) this.observer.disconnect();
      this.classList.remove("is-nudging");
    }
  });
}

// 2. Smooth CTA Scrolling to Product
document.addEventListener("click", event => {
  const link = event.target.closest('a[href^="#produkt"], a[href^="#MainContent"], [data-zm-scroll]');
  if (!link) return;
  
  const target = document.querySelector("#MainContent") || document.querySelector("product-information") || document.querySelector(".product-information");
  if (!target) return;
  
  event.preventDefault();
  const top = target.getBoundingClientRect().top + window.scrollY - 20;
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth"
  });
});
