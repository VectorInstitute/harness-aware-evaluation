const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const pageSections = [...document.querySelectorAll("main > section")];
const previousButton = document.querySelector("[data-deck-prev]");
const nextButton = document.querySelector("[data-deck-next]");
const revealItems = [...document.querySelectorAll("[data-reveal]")];
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentSectionIndex = 0;
let scrollTick = false;

const prefersReducedMotion = () => motionQuery.matches;

const setMenuOpen = (open) => {
  document.body.classList.toggle("nav-open", open);
  navToggle?.setAttribute("aria-expanded", String(open));
};

const sectionTop = (section) => section.getBoundingClientRect().top + window.scrollY;

const updateScrollState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);

  const marker = window.scrollY + window.innerHeight * 0.42;
  currentSectionIndex = pageSections.reduce((closest, section, index) => {
    return sectionTop(section) <= marker ? index : closest;
  }, 0);

  const current = pageSections[currentSectionIndex];
  const threshold = window.innerHeight * 0.1;
  const above = window.scrollY - sectionTop(current);
  const below = sectionTop(current) + current.offsetHeight - (window.scrollY + window.innerHeight);

  previousButton?.toggleAttribute("disabled", currentSectionIndex === 0 && above <= threshold);
  nextButton?.toggleAttribute("disabled", currentSectionIndex === pageSections.length - 1 && below <= threshold);

  const linked = sectionLinks.find((link) => link.getAttribute("href") === `#${current.id}`);
  sectionLinks.forEach((link) => {
    if (link === linked) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
};

const queueScrollUpdate = () => {
  if (scrollTick) return;
  scrollTick = true;
  requestAnimationFrame(() => {
    scrollTick = false;
    updateScrollState();
  });
};

const scrollToY = (top) => {
  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
};

const step = (direction) => {
  const current = pageSections[currentSectionIndex];
  if (!current) return;

  const threshold = window.innerHeight * 0.1;
  const top = sectionTop(current);
  const remainingBelow = top + current.offsetHeight - (window.scrollY + window.innerHeight);
  const remainingAbove = window.scrollY - top;

  if (direction > 0 && remainingBelow > threshold) {
    scrollToY(window.scrollY + window.innerHeight);
    return;
  }

  if (direction < 0 && remainingAbove > threshold) {
    scrollToY(window.scrollY - window.innerHeight);
    return;
  }

  const destination = Math.max(0, Math.min(pageSections.length - 1, currentSectionIndex + direction));
  scrollToY(sectionTop(pageSections[destination]));
};

navToggle?.addEventListener("click", () => {
  setMenuOpen(!document.body.classList.contains("nav-open"));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

previousButton?.addEventListener("click", () => step(-1));
nextButton?.addEventListener("click", () => step(1));

window.addEventListener("scroll", queueScrollUpdate, { passive: true });
window.addEventListener("resize", queueScrollUpdate);

window.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.target.closest("input, textarea, select, [contenteditable='true']")) return;
  if (document.body.classList.contains("nav-open")) return;

  if (event.key === "Home") {
    event.preventDefault();
    scrollToY(sectionTop(pageSections[0]));
    return;
  }

  if (event.key === "End") {
    event.preventDefault();
    scrollToY(sectionTop(pageSections[pageSections.length - 1]));
    return;
  }

  const direction = ["ArrowDown", "PageDown"].includes(event.key)
    ? 1
    : ["ArrowUp", "PageUp"].includes(event.key)
      ? -1
      : 0;

  if (!direction) return;
  event.preventDefault();
  step(direction);
});

if ("IntersectionObserver" in window && !prefersReducedMotion()) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-revealed"));
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    const label = button.querySelector("[data-copy-label]");
    if (!target || !label) return;

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      label.textContent = "Copied";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(target);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      label.textContent = "Selected";
    }

    window.setTimeout(() => {
      label.textContent = "Copy BibTeX";
    }, 1800);
  });
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

updateScrollState();
