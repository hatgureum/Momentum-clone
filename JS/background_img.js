const img_info = [
  {
    painter: "Vincent van Gogh",
    title: "The starry Night",
  },
  {
    painter: "Georges Seurat",
    title: "Afternoon on the Island of La Grande Jatte",
  },
  {
    painter: "Édouard Manet",
    title: "Le Déjeuner sur l’herbe",
  },
  {
    painter: "Pablo Picasso",
    title: "Guernica",
  },
  {
    painter: "Eugène Delacroix",
    title: "Liberty Leading the People",
  },
  {
    painter: "Edward Hopper",
    title: "Nighthawks",
  },
];

const body = document.body;
const img = document.createElement("img");
const img_num = Math.floor(Math.random() * img_info.length);
img.src = `image/${img_num}.jpg`;
// img.height = 959;
body.appendChild(img);
