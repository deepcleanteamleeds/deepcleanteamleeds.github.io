var images = [
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
];

var gallery = document.getElementById("gallery");

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