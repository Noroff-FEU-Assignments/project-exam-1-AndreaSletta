const url =
  "https://andreaslettaexam.eu/wp-json/wc/store/products?_embed&per_page=20";

//Container
const postConatiner = document.querySelector("#all");
const containerPopular = document.querySelector("#popular");
const containerFeatured = document.querySelector("#featured");

//Buttons
const showMoreButton = document.querySelector(".blackbutton");
const sortPopular = document.querySelector(".sortpopular");
const sortFeatured = document.querySelector(".sortfeatured");
const sortStandard = document.querySelector(".sortstandard");

async function getAllPosts() {
  try {
    const response = await fetch(url);
    const content = await response.json();

    containerPopular.style.display = "none";
    containerFeatured.style.display = "none";
    sortStandard.style.backgroundColor = "white";

    //Default
    if (window.innerWidth < 1024) {
      for (var i = 0; i < 6; i++) {
        postConatiner.innerHTML += `
      <a href="individualpost.html?id=${content[i].id}">
        <div id="${"post" + content[i].id}" class="hoverscale">
        <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
      <h3>${content[i].name}</h3>  
      <p>${content[i].short_description.slice(3, 40)} ... 
      <p class="greentext">Continue reading
    `;
      }
    } else if (window.innerWidth > 1023) {
      for (var i = 0; i < 8; i++) {
        postConatiner.innerHTML += `
      <a href="individualpost.html?id=${content[i].id}">
        <div id="${"post" + content[i].id}" class="hoverscale">
        <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
      <h3>${content[i].name}</h3>  
      <p>${content[i].short_description.slice(3, 40)} ... 
      <p class="greentext">Continue reading
    `;
      }
    }

    //Sort by popular

    sortPopular.onclick = function showPopular() {
      for (var i = 0; i < content.length; i++) {
        var categories = content[i].categories;
        for (var j = 0; j < categories.length; j++) {
          if (categories[j].name === "Popular") {
            containerPopular.innerHTML += `
        <a href="individualpost.html?id=${content[i].id}">
          <div id="${"post" + content[i].id}" class="hoverscale">
          <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
        <h3>${content[i].name}</h3>  
        <p>${content[i].short_description.slice(3, 40)} ... 
        <p class="greentext">Continue reading
        `;
          }
        }
      }

      postConatiner.style.display = "none";
      containerPopular.style.display = "grid";
      containerFeatured.style.display = "none";
      postConatiner.innerHTML = "";
      containerFeatured.innerHTML = "";
      showMoreButton.style.display = "none";
      sortStandard.style.backgroundColor = "#ebedea";
      sortFeatured.style.backgroundColor = "#ebedea";
      sortPopular.style.backgroundColor = "white";
    };

    //Sort by featured

    sortFeatured.onclick = function showFeatured() {
      for (var i = 0; i < content.length; i++) {
        var categories = content[i].categories;
        for (var j = 0; j < categories.length; j++) {
          if (categories[j].name === "Featured") {
            containerFeatured.innerHTML += `
        <a href="individualpost.html?id=${content[i].id}">
          <div id="${"post" + content[i].id}" class="hoverscale">
          <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
        <h3>${content[i].name}</h3>  
        <p>${content[i].short_description.slice(3, 40)} ... 
        <p class="greentext">Continue reading
        `;
          }
        }
      }

      postConatiner.style.display = "none";
      containerPopular.style.display = "none";
      containerFeatured.style.display = "grid";
      postConatiner.innerHTML = "";
      containerPopular.innerHTML = "";
      showMoreButton.style.display = "none";
      sortStandard.style.backgroundColor = "#ebedea";
      sortPopular.style.backgroundColor = "#ebedea";
      sortFeatured.style.backgroundColor = "white";
    };

    // Sort by default
    sortStandard.onclick = function showStandard() {
      if (window.innerWidth < 1024) {
        for (var i = 0; i < 6; i++) {
          postConatiner.innerHTML += `
        <a href="individualpost.html?id=${content[i].id}">
          <div id="${"post" + content[i].id}" class="hoverscale">
          <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
        <h3>${content[i].name}</h3>  
        <p>${content[i].short_description.slice(3, 40)} ... 
        <p class="greentext">Continue reading
      `;
        }
      } else if (window.innerWidth > 1023) {
        for (var i = 0; i < 8; i++) {
          postConatiner.innerHTML += `
        <a href="individualpost.html?id=${content[i].id}">
          <div id="${"post" + content[i].id}" class="hoverscale">
          <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
        <h3>${content[i].name}</h3>  
        <p>${content[i].short_description.slice(3, 40)} ... 
        <p class="greentext">Continue reading
      `;
        }
      }
      postConatiner.style.display = "grid";
      containerPopular.style.display = "none";
      containerFeatured.style.display = "none";
      containerFeatured.innerHTML = "";
      containerPopular.innerHTML = "";
      showMoreButton.style.display = "block";
      sortPopular.style.backgroundColor = "#ebedea";
      sortFeatured.style.backgroundColor = "#ebedea";
      sortStandard.style.backgroundColor = "white";
    };

    showMoreButton.onclick = function showMore() {
      //Default
      if (
        window.innerWidth < 1024 &&
        (postConatiner.style.innerHTML = "grid")
      ) {
        const childCount = postConatiner.childElementCount;
        for (var i = childCount; i < childCount + 3; i++) {
          postConatiner.innerHTML += `
        <a href="individualpost.html?id=${content[i].id}">
          <div id="${"post" + content[i].id}" class="hoverscale">
          <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
        <h3>${content[i].name}</h3>  
        <p>${content[i].short_description.slice(3, 40)} ... 
        <p class="greentext">Continue reading
      `;
          console.log(childCount);
          if (childCount > 11) {
            showMoreButton.style.display = "none";
          }
        }
      } else if (
        window.innerWidth > 1023 &&
        (postConatiner.style.innerHTML = "grid")
      ) {
        const childCount = postConatiner.childElementCount;
        for (var i = childCount; i < childCount + 4; i++) {
          postConatiner.innerHTML += `
        <a href="individualpost.html?id=${content[i].id}">
          <div id="${"post" + content[i].id}" class="hoverscale">
          <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
        <h3>${content[i].name}</h3>  
        <p>${content[i].short_description.slice(3, 40)} ... 
        <p class="greentext">Continue reading
      `;
          console.log(childCount);
          if (childCount > 11) {
            showMoreButton.style.display = "none";
          }
        }
      }
    };
  } catch (error) {
    console.log(error);
  }
}
getAllPosts();
