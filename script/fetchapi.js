// https://andreaslettaexam.eu/wp-json/wc/store/products

const url =
  "https://andreaslettaexam.eu/wp-json/wc/store/products?_embed&per_page=20";

const carousel = document.querySelector(".carousel > figure");
const figure = document.querySelector(".postconatiner");

async function getAllPosts() {
  try {
    const response = await fetch(url);

    const content = await response.json();

    console.log(content);
    //
    /*
    var style = window.getComputedStyle(carousel);
    var margLelft = style.getPropertyValue("margin-left");
    var windowWidth = window.innerWidth * 0.7;
    var minusNum = parseInt(margLelft) - windowWidth;
*/ content.length = 9;
    for (let i = 0; i < content.length; i++) {
      carousel.innerHTML += `
      <a href="individualpost.html?id=${content[i].id}">
        <div id="${"post" + content[i].id}" class="hoverscale">
        <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
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
    var margLelft = style.getPropertyValue("margin-left");
    var left = style.getPropertyValue("left");

    var windowWidth = window.innerWidth * 0.7;
    var minusNum = parseInt(margLelft) - windowWidth;
    var prosent = figure.style.left - 100;
  } catch (error) {
    console.log(error);
  }
}
getAllPosts();

const rightButton = document.querySelector(".buttonright");

const leftButton = document.querySelector(".buttonleft");

/*var carouselNull = `<div >
    <img src="${content[0].images[0].src}" alt="${content[0].images.alt}">
    <h3>${content[0].name}</h3>
    <p>${content[0].description}</p>
    </div>`;
    //
    carousel.innerHTML += carouselNull;
    //
    rightButton.onclick = function forRightButton() {
      if (!(window.innerWidth > "700")) {
        x = 1;
        for (let i = 0; i < content.length; i++) {
          carousel.innerHTML = `<div>
            <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
          <h3>${content[i].name}</h3>
          <p>${content[i].description}</p>
          </div>`;
        }
      }
      /**/
/*
    rightButton.onclick = function forRightButton() {
      if (!(window.innerWidth > "700") && (post13.style.display = "block")) {
        post13.style.display = "none";
        post17.style.display = "block";
      }
    };*/

/*
rightButton.onclick = function removeMargin() {
  var style = window.getComputedStyle(carousel);
  var margLelft = style.getPropertyValue("margin-left");
  var windowWidth = window.innerWidth * 0.7;
  var minusNum = parseInt(margLelft) - windowWidth;

  if ((margLelft = windowWidth * 13 + "px")) {
    carousel.style.marginLeft = minusNum + "px";
  } else if (margLelft == windowWidth * -13) {
    carousel.style.marginLeft = "0" + "px";
  }
};
*/
/*console.log(rightButton);
function addToMargin() {
  if (rightButton.id == true) {
    console.log("hi");
  } else if (rightButton.id == false) {
    console.log("hello");
  }
}
addToMargin();
rightButton.addEventListener("clicked", addToMargin);


rightButton.onclick = (function rightOuter() {
  var rightCounter = 0;
  return function rigthInner() {
    rightCounter++;

    var style = window.getComputedStyle(carousel);
    var margLelft = style.getPropertyValue("margin-left");
    var minusNum = margLelft + "-70";

    if (rightCounter < 14) {
      carousel.style.marginLeft = minusNum + "vw";
    } else if (rightCounter == 14) {
      carousel.style.marginLeft = "0" + "vw";
    }
  };
})();
*/
/*
leftButton.onclick = (function leftOuter() {
  var leftCounter = 0;
  return function leftInner() {
    leftCounter++;

    var style = window.getComputedStyle(carousel);
    var margLelft = style.getPropertyValue("margin-left");
    for (var i = 0; i < margLelft.length; i++) {
      var minusNum = margLelft[0] + "70";
      carousel.style.marginLeft += minusNum + "vw";
      /*
      if (leftCounter < 14) {
        console.log(minusNum);
        carousel.style.marginLeft = minusNum + "vw";
      } else if (leftCounter == 14) {
        carousel.style.marginLeft = "0" + "vw";
      }
    }
  };
})();*/
/*
rightButton.onclick = (function rightOuter() {
  var rightCounter = 0;
  return function rightInner() {
    rightCounter++;

    var style = window.getComputedStyle(carousel);
    var margLelft = style.getPropertyValue("margin-left");
    for (var i = 0; i < margLelft.length; i++) {
      var minusNum = margLelft[0] - 70;
      console.log(minusNum);
      carousel.style.marginLeft = minusNum + `vw`;
      
      if (leftCounter < 14) {
        console.log(minusNum);
        carousel.style.marginLeft = minusNum + "vw";
      } else if (leftCounter == 14) {
        carousel.style.marginLeft = "0" + "vw";
      }
    }
  };
})();*/

// if left button clicked add 70vw to margin
// if right button clicked subtract 70vw to margin
// if width of sreen in smaller than x display one photo
