// https://andreaslettaexam.eu/wp-json/wc/store/products

const url =
  "https://andreaslettaexam.eu/wp-json/wc/store/products?_embed&per_page=20";

const carousel = document.querySelector(".carousel > figure");

async function getAllPosts() {
  try {
    const response = await fetch(url);

    const content = await response.json();

    console.log(content);
    for (let i = 0; i < content.length; i++) {
      carousel.innerHTML += `<div>
        <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
      <h3>${content[i].name}</h3>
      <p>${content[i].description}</p>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}
getAllPosts();

//Make carousel buttons functioning

const rightButton = document.querySelector(".buttonright");

const leftButton = document.querySelector(".buttonleft");

// button count

rightButton.onclick = (function outer() {
  var counter = 0;
  return function inner() {
    counter++;
  };
})();

function arrowRight() {
  var style = window.getComputedStyle(carousel);
  var margLelft = style.getPropertyValue("margin-left");
  console.log(margLelft);

  if (carousel.style.marginLeft == 0) {
    carousel.style.marginLeft = "-70" + "vw";
    console.log("-70");
  } else if (carousel.style.marginLeft == "-70vw") {
    carousel.style.marginLeft = "-140" + "vw";
    console.log("-140");
  } else if (carousel.style.marginLeft == "-140vw") {
    carousel.style.marginLeft = "-210" + "vw";
    console.log("-210");
  } else if (carousel.style.marginLeft == "-210vw") {
    carousel.style.marginLeft = "-280" + "vw";
    console.log("-280");
  }
}
rightButton.addEventListener("click", arrowRight);
