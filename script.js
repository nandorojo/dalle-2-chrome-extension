var src = images[Math.floor(Math.random() * images.length)];

var img = document.createElement("img");
img.src = src;
document.getElementById("img").appendChild(img);

var link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.getElementsByTagName("head")[0].appendChild(link);
}
link.href = src;
