var images = [
  "img/jobs/commercial/IMG-20240709-WA0002.jpg",
  "img/jobs/commercial/IMG-20240709-WA0003.jpg",
  "img/jobs/commercial/playground-comparison.jpg",
  "img/jobs/commercial/IMG-20240709-WA0006.jpg",
  "img/jobs/commercial/IMG-20240709-WA0009.jpg",
  "img/jobs/commercial/IMG-20240709-WA0010.jpg",
];

var gallery = document.getElementById("gallery-commercial");

for (var i = 0; i < images.length; i++) {
  var thumbnailWrapper = document.createElement("div");
  thumbnailWrapper.className = "thumbnail-wrapper";

  var thumbnail = document.createElement("a");
  thumbnail.className = "thumbnail";
  thumbnail.setAttribute('style', 'background-image:url(\"' + images[i] + '\");');
  thumbnail.setAttribute('href', images[i]);

  thumbnailWrapper.appendChild(thumbnail);
  gallery.appendChild(thumbnailWrapper);
}

console.log(gallery)