var commercialImages = [
  "img/jobs/commercial/IMG-20240709-WA0002.jpg",
  "img/jobs/commercial/IMG-20240709-WA0003.jpg",
  "img/jobs/commercial/playground-comparison.jpg",
  "img/jobs/commercial/IMG-20240709-WA0006.jpg",
  "img/jobs/commercial/IMG-20240709-WA0009.jpg"
];

/* Thumbnails are plain links straight to the image file - clicking one
   simply opens/navigates to the photo, same as the site's original
   behaviour. No JS modal dependency, so it always works. */
(function () {
  var gallery = document.getElementById("gallery-commercial");
  if (!gallery) return;

  for (var i = 0; i < commercialImages.length; i++) {
    var thumbnailWrapper = document.createElement("div");
    thumbnailWrapper.className = "thumbnail-wrapper";

    var thumbnail = document.createElement("a");
    thumbnail.className = "thumbnail";
    thumbnail.href = commercialImages[i];
    thumbnail.style.backgroundImage = 'url("' + commercialImages[i] + '")';
    thumbnail.setAttribute("aria-label", "Open commercial cleaning photo " + (i + 1) + " full size");

    thumbnailWrapper.appendChild(thumbnail);
    gallery.appendChild(thumbnailWrapper);
  }
})();
