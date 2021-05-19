// https://andreaslettaexam.eu/wp-json/wc/store/products

const url =
  "https://andreaslettaexam.eu/wp-json/wc/store/products?_embed&per_page=20";

const carousel = document.querySelector(".carousel > div");
const figure = document.querySelector(".postconatiner");
const loading = document.querySelector(".loading");

async function getAllPosts() {
  try {
    const response = await fetch(url);

    const content = await response.json();

    loading.style.display = "none";

    content.length = 9;
    for (let i = 0; i < content.length; i++) {
      carousel.innerHTML += `
      <a href="individualpost.html?id=${content[i].id}">
        <div id="${"post" + content[i].id}" class="hoverscale">
        <img src="${content[i].images[0].src}" alt="${
        content[i].images[0].alt
      }">
      <h3>${content[i].name}</h3>  
      <p>${content[i].short_description.slice(3, 40)} ... 
      <p class="greentext">Continue reading
    `;
    }

    rightButton.onclick = function forRightButton() {
      if (window.innerWidth < 768) {
        if (figure.style.left == 0 || figure.style.left == "0px") {
          figure.style.left = "-100%";
        } else if (figure.style.left == "-100%") {
          figure.style.left = "-200%";
        } else if (figure.style.left == "-200%") {
          figure.style.left = "-300%";
        } else if (figure.style.left == "-300%") {
          figure.style.left = "-400%";
        } else if (figure.style.left == "-400%") {
          figure.style.left = "-500%";
        } else if (figure.style.left == "-500%") {
          figure.style.left = "-600%";
        } else if (figure.style.left == "-600%") {
          figure.style.left = "-700%";
        } else if (figure.style.left == "-700%") {
          figure.style.left = "-800%";
        } else if (figure.style.left == "-800%") {
          figure.style.left = 0;
        }
      } else if (window.innerWidth > 767 && window.innerWidth < 1024) {
        if (figure.style.left == 0 || figure.style.left == "0px") {
          figure.style.left = "-100%";
        } else if (figure.style.left == "-100%") {
          figure.style.left = "-200%";
        } else if (figure.style.left == "-200%") {
          figure.style.left = "-300%";
        } else if (figure.style.left == "-300%") {
          figure.style.left = "-400%";
        } else if (figure.style.left == "-400%") {
          figure.style.left = 0;
        }
      } else if (window.innerWidth > 1023) {
        if (figure.style.left == 0 || figure.style.left == "0px") {
          figure.style.left = "-100%";
        } else if (figure.style.left == "-100%") {
          figure.style.left = "-200%";
        } else if (figure.style.left == "-200%") {
          figure.style.left = 0;
        }
      }
    };

    leftButton.onclick = function forLeftButton() {
      if (window.innerWidth < 768) {
        if (figure.style.left == 0 || figure.style.left == "0px") {
          figure.style.left = "-800%";
        } else if (figure.style.left == "-100%") {
          figure.style.left = "0";
        } else if (figure.style.left == "-200%") {
          figure.style.left = "-100%";
        } else if (figure.style.left == "-300%") {
          figure.style.left = "-200%";
        } else if (figure.style.left == "-400%") {
          figure.style.left = "-300%";
        } else if (figure.style.left == "-500%") {
          figure.style.left = "-400%";
        } else if (figure.style.left == "-600%") {
          figure.style.left = "-500%";
        } else if (figure.style.left == "-600%") {
          figure.style.left = "-500%";
        } else if (figure.style.left == "-700%") {
          figure.style.left = "-600%";
        } else if (figure.style.left == "-800%") {
          figure.style.left = "-700%";
        }
      } else if (window.innerWidth > 767 && window.innerWidth < 1024) {
        if (figure.style.left == 0 || figure.style.left == "0px") {
          figure.style.left = "-400%";
        } else if (figure.style.left == "-100%") {
          figure.style.left = "0";
        } else if (figure.style.left == "-200%") {
          figure.style.left = "-100%";
        } else if (figure.style.left == "-300%") {
          figure.style.left = "-200%";
        } else if (figure.style.left == "-400%") {
          figure.style.left = "-300%";
        }
      } else if (window.innerWidth > 1023) {
        if (figure.style.left == 0 || figure.style.left == "0px") {
          figure.style.left = "-200%";
        } else if (figure.style.left == "-100%") {
          figure.style.left = "0";
        } else if (figure.style.left == "-200%") {
          figure.style.left = "-100%";
        }
      }
    };

    var style = window.getComputedStyle(carousel);
  } catch (error) {
    console.log(error);
    loading.innerHTML = "Error loading page!";
  }
}
getAllPosts();

const rightButton = document.querySelector(".buttonright");

const leftButton = document.querySelector(".buttonleft");
