const body = document.body;
const img = document.createElement("img");
const img_num = Math.floor(Math.random() * 10);
img.src = `image/${img_num}.jpg`;
body.appendChild(img);
