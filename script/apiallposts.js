const url =
  "https://andreaslettaexam.eu/wp-json/wc/store/products?_embed&per_page=20";

//Container
const postConatiner = document.querySelector("#all");
const containerOld = document.querySelector("#old");
const containerFeatured = document.querySelector("#featured");

//Buttons
const showMoreButton = document.querySelector(".blackbutton");
const sortOld = document.querySelector(".sortold");
const sortFeatured = document.querySelector(".sortfeatured");
const sortStandard = document.querySelector(".sortstandard");

async function getAllPosts() {
  try {
    const response = await fetch(url);
    const content = await response.json();

    containerOld.style.display = "none";
    containerFeatured.style.display = "none";

    // Standard
    for (var i = 0; i < 10; i++) {
      postConatiner.innerHTML += `
      <a href="individualpost.html?id=${content[i].id}">
        <div id="${"post" + content[i].id}">
        <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
      <h3>${content[i].name}</h3>  
      <p>${content[i].short_description.slice(3, 40)} ... 
      <p class="greentext">Continue reading
    `;
    }

    // Sort by old
    sortOld.onclick = function showOld() {
      for (var i = 0; i < 10; i++) {
        containerOld.innerHTML += `
        <a href="individualpost.html?id=${content.reverse()[i].id}">
          <div id="${"post" + content.reverse()[i].id}">
          <img src="${content.reverse()[i].images[0].src}" alt="${
          content.reverse()[i].images.alt
        }">
        <h3>${content.reverse()[i].name}</h3>  
        <p>${content.reverse()[i].short_description.slice(3, 40)} ... 
        <p class="greentext">Continue reading
      `;
      }
      postConatiner.style.display = "none";
      containerOld.style.display = "grid";
      containerFeatured.style.display = "none";
      postConatiner.innerHTML = "";
      containerFeatured.innerHTML = "";
      showMoreButton.style.display = "block";
    };

    // Sort by featured
    sortFeatured.onclick = function showFeatured() {
      for (var i = 0; i < content.length; i++) {
        var categories = content[i].categories;
        for (var j = 0; j < categories.length; j++) {
          if (categories[j].name === "Featured") {
            containerFeatured.innerHTML += `
        <a href="individualpost.html?id=${content[i].id}">
          <div id="${"post" + content[i].id}">
          <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
        <h3>${content[i].name}</h3>  
        <p>${content[i].short_description.slice(3, 40)} ... 
        <p class="greentext">Continue reading
        `;
          }
        }
      }

      postConatiner.style.display = "none";
      containerOld.style.display = "none";
      containerFeatured.style.display = "grid";
      postConatiner.innerHTML = "";
      containerOld.innerHTML = "";
    };

    // Sort by standard
    sortStandard.onclick = function showStandard() {
      for (var i = 0; i < 10; i++) {
        postConatiner.innerHTML += `
      <a href="individualpost.html?id=${content[i].id}">
        <div id="${"post" + content[i].id}">
        <img src="${content[i].images[0].src}" alt="${content[i].images.alt}">
      <h3>${content[i].name}</h3>  
      <p>${content[i].short_description.slice(3, 40)} ... 
      <p class="greentext">Continue reading
    `;
      }
      postConatiner.style.display = "grid";
      containerOld.innerHTML = "";
      containerOld.style.display = "none";
      containerFeatured.style.display = "none";
      containerFeatured.innerHTML = "";
      showMoreButton.style.display = "block";
    };

    //show more
    showMoreButton.onclick = function showMore() {
      if ((postConatiner.style.innerHTML = "grid")) {
        for (var i = 10; i < 10 + 4; i++) {
          postConatiner.innerHTML += `
          <a href="individualpost.html?id=${content[i].id}">
            <div id="${"post" + content[i].id}">
            <img src="${content[i].images[0].src}" alt="${
            content[i].images.alt
          }">
          <h3>${content[i].name}</h3>  
          <p>${content[i].short_description.slice(3, 40)} ... 
          <p class="greentext">Continue reading
        `;
        }
        showMoreButton.style.display = "none";
      } /* else if ((containerOld.style.innerHTML = "grid")) {
        for (var i = 10; i < 4 + 10; i++) {
          containerOld.innerHTML += `
      <a href="individualpost.html?id=${content.reverse()[i].id}">
        <div id="${"post" + content.reverse()[i].id}">
        <img src="${content.reverse()[i].images[0].src}" alt="${
            content.reverse()[i].images.alt
          }">
      <h3>${content.reverse()[i].name}</h3>  
      <p>${content.reverse()[i].short_description.slice(3, 40)} ... 
      <p class="greentext">Continue reading
    `;
          showMoreButton.style.display = "none";
        }
      }*/
    };
  } catch (error) {
    console.log(error);
  }
}
getAllPosts();
