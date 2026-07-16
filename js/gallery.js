var domesticImages = [
  "img/jobs/IMG-20240702-WA0026.jpg",
  "img/jobs/IMG-20240702-WA0011.jpg",
  "img/jobs/IMG-20240702-WA0017.jpg",
  "img/jobs/IMG-20240702-WA0020.jpg",
  "img/jobs/IMG-20240702-WA0022.jpg",
  "img/jobs/IMG-20240702-WA0023.jpg",
  "img/jobs/IMG-20240702-WA0024.jpg",
  "img/jobs/IMG-20240702-WA0025.jpg",
  "img/jobs/IMG-20240702-WA0027.jpg",
  "img/jobs/IMG-20240702-WA0028.jpg",
  "img/jobs/IMG-20240702-WA0021.jpg",
  "img/jobs/IMG-20250112-WA0024.jpg",
  "img/jobs/dct-driveway-block-paving-clean.jpg",
  "img/jobs/dct-driveway-resin-gated.jpg",
  "img/jobs/dct-driveway-resin-wide.jpg",
  "img/jobs/dct-patio-after-clean.jpg",
  "img/jobs/dct-patio-slabs-furniture.jpg",
  "img/jobs/dct-decking-clean-progress.jpg",
  "img/jobs/dct-roof-moss-before.jpg",
  "img/jobs/dct-roof-clean-after.jpg",
  "img/jobs/dct-solar-panel-cleaning.jpg"
];

/* Thumbnails are plain links straight to the image file - clicking one
   simply opens/navigates to the photo, same as the site's original
   behaviour. No JS modal dependency, so it always works. */
(function () {
  var gallery = document.getElementById("gallery");
  if (!gallery) return;

  for (var i = 0; i < domesticImages.length; i++) {
    var thumbnailWrapper = document.createElement("div");
    thumbnailWrapper.className = "thumbnail-wrapper";

    var thumbnail = document.createElement("a");
    thumbnail.className = "thumbnail";
    thumbnail.href = domesticImages[i];
    thumbnail.style.backgroundImage = 'url("' + domesticImages[i] + '")';
    thumbnail.setAttribute("aria-label", "Open domestic cleaning photo " + (i + 1) + " full size");

    thumbnailWrapper.appendChild(thumbnail);
    gallery.appendChild(thumbnailWrapper);
  }
})();
