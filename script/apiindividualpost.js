// https://andreaslettaexam.eu/wp-json/wc/store/products

const url =
  "https://andreaslettaexam.eu/wp-json/wc/store/products?_embed&per_page=20";

async function getAllPosts() {
  try {
    const response = await fetch(url);
    const content = await response.json();
    console.log(content);
  } catch (error) {
    console.log(error);
  }
}
getAllPosts();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const productURL =
  "https://www.andreaslettaexam.eu/wp-json/wc/store/products/" + id;

const productBlog = document.querySelector(".productblog");
const currentProductLink = document.querySelector(".productLink");
// get singe product

async function getProduct() {
  try {
    const respons = await fetch(productURL);
    const productDetail = await respons.json();

    console.log(productDetail);

    currentProductLink.innerHTML += `<a>
      ${productDetail.name}
      </a>`;
    productBlog.innerHTML += `<h1>${productDetail.name}</h1>
    <img class="bigimage" src="${productDetail.images[0].src}" alt="${productDetail.images[0].alt}">
    <p>${productDetail.short_description}</p>
    <div class="smallimage">
    <img  src="${productDetail.images[1].src}" alt="${productDetail.images[1].alt}">
    <img  src="${productDetail.images[2].src}" alt="${productDetail.images[2].alt}">
    </div>
    <p>${productDetail.description}</p>
    `;
  } catch (error) {
    console.log(error);
  }
}
getProduct();
