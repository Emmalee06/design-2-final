// Carousel functionality
class Carousel {
  constructor(element) {
    this.element = element;
    this.container = element.querySelector(".carousel-container");
    this.slides = element.querySelectorAll(".video-card, .topic-card");
    this.dots = element.querySelectorAll(".dot");
    this.prevBtn = element.querySelector(".carousel-nav.prev");
    this.nextBtn = element.querySelector(".carousel-nav.next");
    this.currentIndex = 0;
    this.slideWidth = 0;
    this.autoplayInterval = null;
    this.autoplayDelay = 5000; // 5 seconds

    this.init();
  }

  init() {
    // Set initial slide width
    this.updateSlideWidth();

    // Add event listeners
    this.prevBtn?.addEventListener("click", () => this.prev());
    this.nextBtn?.addEventListener("click", () => this.next());

    // Add dot click handlers
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Add touch support
    this.addTouchSupport();

    // Add resize handler
    window.addEventListener("resize", () => this.updateSlideWidth());

    // Start autoplay
    this.startAutoplay();

    // Pause autoplay on hover
    this.element.addEventListener("mouseenter", () => this.stopAutoplay());
    this.element.addEventListener("mouseleave", () => this.startAutoplay());
  }

  updateSlideWidth() {
    this.slideWidth = this.slides[0].offsetWidth;
    this.goToSlide(this.currentIndex, false);
  }

  prev() {
    this.goToSlide(this.currentIndex - 1);
  }

  next() {
    this.goToSlide(this.currentIndex + 1);
  }

  goToSlide(index, animate = true) {
    // Handle circular navigation
    if (index < 0) {
      index = this.slides.length - 1;
    } else if (index >= this.slides.length) {
      index = 0;
    }

    this.currentIndex = index;

    // Update transform with or without animation
    this.container.style.transition = animate ? "transform 0.3s ease" : "none";
    this.container.style.transform = `translateX(-${
      this.currentIndex * this.slideWidth
    }px)`;

    // Update dots
    this.dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === this.currentIndex);
      dot.setAttribute("aria-selected", i === this.currentIndex);
    });
  }

  addTouchSupport() {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    this.container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      this.stopAutoplay();
    });

    this.container.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      this.container.style.transform = `translateX(${
        -this.currentIndex * this.slideWidth + diff
      }px)`;
    });

    this.container.addEventListener("touchend", () => {
      if (!isDragging) return;
      isDragging = false;
      const diff = currentX - startX;
      if (Math.abs(diff) > this.slideWidth / 3) {
        if (diff > 0) {
          this.prev();
        } else {
          this.next();
        }
      } else {
        this.goToSlide(this.currentIndex);
      }
      this.startAutoplay();
    });
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => this.next(), this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// Navigation functionality
class Navigation {
  constructor() {
    this.navItems = document.querySelectorAll(".nav-item");
    this.init();
  }

  init() {
    this.navItems.forEach((item) => {
      item.addEventListener("click", () => this.handleNavClick(item));
    });
  }

  handleNavClick(clickedItem) {
    this.navItems.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    clickedItem.classList.add("active");
    clickedItem.setAttribute("aria-selected", "true");
  }
}

// Initialize components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize carousels
  const carousels = document.querySelectorAll(
    ".video-carousel, .topics-carousel"
  );
  carousels.forEach((carousel) => new Carousel(carousel));

  // Initialize navigation
  new Navigation();

  // Handle notification button
  const notificationBtn = document.querySelector(".notification-btn");
  if (notificationBtn) {
    notificationBtn.addEventListener("click", () => {
      // Add your notification logic here
      console.log("Notifications clicked");
    });
  }

  // Handle see details buttons
  const detailsButtons = document.querySelectorAll(".see-details");
  detailsButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = button.closest(".video-card, .topic-card, .deal-card");
      const title = card.querySelector("h3").textContent;
      console.log(`Opening details for: ${title}`);
    });
  });

  // Add loading="lazy" to all images
  document.querySelectorAll("img").forEach((img) => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
  });
});
