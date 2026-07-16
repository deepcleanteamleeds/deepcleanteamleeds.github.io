/* Deep Clean Team - simple dependency-free lightbox */
(function () {
  var overlay, imgEl, closeBtn, prevBtn, nextBtn;
  var currentImages = [];
  var currentIndex = 0;

  function build() {
    overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    imgEl = document.createElement("img");
    imgEl.alt = "Enlarged cleaning result photo";

    closeBtn = document.createElement("button");
    closeBtn.className = "lightbox-close";
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.innerHTML = "&times;";

    prevBtn = document.createElement("button");
    prevBtn.className = "lightbox-nav lightbox-prev";
    prevBtn.setAttribute("aria-label", "Previous photo");
    prevBtn.innerHTML = "&#10094;";

    nextBtn = document.createElement("button");
    nextBtn.className = "lightbox-nav lightbox-next";
    nextBtn.setAttribute("aria-label", "Next photo");
    nextBtn.innerHTML = "&#10095;";

    overlay.appendChild(closeBtn);
    overlay.appendChild(prevBtn);
    overlay.appendChild(imgEl);
    overlay.appendChild(nextBtn);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", function (e) { e.stopPropagation(); show(currentIndex - 1); });
    nextBtn.addEventListener("click", function (e) { e.stopPropagation(); show(currentIndex + 1); });

    document.addEventListener("keydown", function (e) {
      if (!overlay.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(currentIndex - 1);
      if (e.key === "ArrowRight") show(currentIndex + 1);
    });
  }

  function show(index) {
    if (!currentImages.length) return;
    currentIndex = (index + currentImages.length) % currentImages.length;
    imgEl.src = currentImages[currentIndex];
  }

  function open(images, index) {
    if (!overlay) build();
    currentImages = images;
    show(index || 0);
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  window.DCTLightbox = { open: open, close: close };
})();
