/* Deep Clean Team - lightweight testimonial slider.
   Works with any number of .testimonial-slide elements inside a
   .testimonial-slider > .testimonial-track container. To add another
   review, just duplicate a .testimonial-slide block in the HTML -
   the dots/arrows/autoplay all adapt automatically. */
(function () {
  function initSlider(root) {
    var track = root.querySelector(".testimonial-track");
    var slides = Array.prototype.slice.call(root.querySelectorAll(".testimonial-slide"));
    if (!track || slides.length === 0) return;

    // Start one slide in rather than always resting on the first review.
    var index = slides.length > 1 ? 1 : 0;
    var autoplayMs = 7000;
    var timer = null;

    var prevBtn = root.querySelector(".slider-prev");
    var nextBtn = root.querySelector(".slider-next");
    var dotsWrap = root.querySelector(".testimonial-dots");
    var dots = [];

    if (slides.length <= 1) {
      if (prevBtn) prevBtn.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
      if (dotsWrap) dotsWrap.style.display = "none";
      return;
    }

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.setAttribute("aria-label", "Go to testimonial " + (i + 1));
        dot.addEventListener("click", function () { goTo(i); resetAutoplay(); });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });
    }

    function render() {
      track.style.transform = "translateX(-" + (index * 100) + "%)";
      dots.forEach(function (d, i) { d.classList.toggle("is-active", i === index); });
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      render();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function startAutoplay() {
      timer = window.setInterval(next, autoplayMs);
    }
    function stopAutoplay() {
      if (timer) { window.clearInterval(timer); timer = null; }
    }
    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    if (nextBtn) nextBtn.addEventListener("click", function () { next(); resetAutoplay(); });
    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); resetAutoplay(); });

    root.addEventListener("mouseenter", stopAutoplay);
    root.addEventListener("mouseleave", startAutoplay);
    root.addEventListener("focusin", stopAutoplay);
    root.addEventListener("focusout", startAutoplay);

    // Basic touch swipe support
    var touchStartX = null;
    track.addEventListener("touchstart", function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      if (touchStartX === null) return;
      var delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 40) { delta < 0 ? next() : prev(); resetAutoplay(); }
      touchStartX = null;
    });

    render();
    startAutoplay();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var sliders = document.querySelectorAll(".testimonial-slider");
    Array.prototype.forEach.call(sliders, initSlider);
  });
})();
