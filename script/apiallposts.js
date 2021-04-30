// https://andreaslettaexam.eu/wp-json/wc/store/products

const url =
  "https://andreaslettaexam.eu/wp-json/wc/store/products?_embed&per_page=20";

const postConatiner = document.querySelector(".postconatiner");

async function getAllPosts() {
  try {
    const response = await fetch(url);

    const content = await response.json();

    console.log(content);

    for (let i = 0; i < content.length; i++) {
      // all posts page
      postConatiner.innerHTML += `<a href="individualpost.html?id=${content[i].id}" > <div> 
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
