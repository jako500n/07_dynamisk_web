const h1 = document.querySelector("h1");
console.log(h1);

const h2 = document.querySelector("h2");
console.log(h2);

const h3 = document.querySelector("h3");
console.log(h3);

const p1 = document.querySelector("article:nth-child(1) p");
console.log(p1);

const p2 = document.querySelector("article:nth-child(2) p");
console.log(p2);

const img1 = document.querySelector("article:nth-child(1) img");
console.log(img1);

const img2 = document.querySelector("article:nth-child(2) img");
console.log(img2);

img1.src = "https://placeimg.com/700/500/nature";

img2.src = "https://placeimg.com/700/500/nature";

img1.alt = "En anden tekst";

img2.alt = "En tredje tekst";
