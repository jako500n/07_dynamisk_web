document.addEventListener("DOMContentLoaded", start);

function start() {
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

  const til_article = document.querySelector(".grid");
  let article3 = document.createElement("article");

  til_article.appendChild(article3);
  console.log("test");
  //   let article3 = document.querySelector("#article3");

  let img3 = document.createElement("img");
  img3.src = "https://placeimg.com/700/500/nature";
  let h3_01 = document.createElement("h3");
  let overskrift = document.createTextNode("Article 3");
  let p3 = document.createElement("p");
  let tekst = document.createTextNode(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, asperiores impedit eos unde laboriosam numquam vero natus corrupti a facere ipsa doloribus maiores sunt dignissimos non! Perspiciatis debitis molestiae molestias voluptas neque repellat maiores pariatur. "
  );

  p3.appendChild(tekst);
  h3_01.appendChild(overskrift);

  article3.appendChild(img3);
  article3.appendChild(h3_01);
  article3.appendChild(p3);

  img3.addEventListener("click", skiftBillede);
}

function skiftBillede() {
  let img3 = document.querySelector(img3);
  console.log("godt");
  let img4 = document.createElement("img");
  img4.src = "https://placeimg.com/400/300/arch?t=%22+4";
  img3.appendChild(img4);
}
