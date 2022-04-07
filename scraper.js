// run this in the console of https://openai.com/dall-e-2/

const allImages = document.getElementsByTagName("img");

const sources = [];

for (var i = 0; i < allImages.length; i++) {
  sources[i] = allImages[i].src || allImages[i].getAttribute("data-src");
}

console.log(JSON.stringify(sources.filter(Boolean)));
