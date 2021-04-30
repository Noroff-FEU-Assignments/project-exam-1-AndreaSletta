// https://andreaslettaexam.eu/wp-json/wc/store/products

const url =
  "https://andreaslettaexam.eu/wp-json/wc/store/products?_embed&per_page=20";

const carousel = document.querySelector(".carousel > figure");

const postConatiner = document.querySelector(".postconatiner");

async function getAllPosts() {
  try {
    const response = await fetch(url);

    const content = await response.json();

    console.log(content);
    //
    var style = window.getComputedStyle(carousel);
    var margLelft = style.getPropertyValue("margin-left");
    var windowWidth = window.innerWidth * 0.7;
    var minusNum = parseInt(margLelft) - windowWidth;
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
    for (let i = 0; i < content.length; i++) {
      // inder page
      carousel.innerHTML += `<div id="${"post" + content[i].id}">
        <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
      <h3>${content[i].name}</h3>
      <p>${content[i].description}</p>
      </div>`;
      // all posts page
      postConatiner.innerHTML += `<div id="${"post" + content[i].id}">
      <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
    <h3>${content[i].name}</h3>
    <p>${content[i].description}</p>
    </div>`;
    }
    const post13 = document.querySelector("#post13");
    const post17 = document.querySelector("#post17");
    const post21 = document.querySelector("#post21");
    const post25 = document.querySelector("#post25");
    const post29 = document.querySelector("#post29");
    const post34 = document.querySelector("#post34");
    const post38 = document.querySelector("#post38");
    const post42 = document.querySelector("#post42");
    const post46 = document.querySelector("#post46");
    const post51 = document.querySelector("#post51");
    const post55 = document.querySelector("#post55");
    const post59 = document.querySelector("#post59");
    const post63 = document.querySelector("#post63");
    const post69 = document.querySelector("#post69");

    rightButton.onclick = function forRightButton() {
      if (!(window.innerWidth > "700") && (post13.style.display = "block")) {
        post13.style.display = "none";
        post17.style.display = "block";
      }
    };
  } catch (error) {
    console.log(error);
  }
}
getAllPosts();

//Make carousel buttons functioning

const rightButton = document.querySelector(".buttonright");

const leftButton = document.querySelector(".buttonleft");

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
