const url =
  "https://andreaslettaexam.eu/wp-json/wc/store/products?_embed&per_page=20";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const productURL =
  "https://www.andreaslettaexam.eu/wp-json/wc/store/products/" + id;

const productBlog = document.querySelector(".productblog");
const currentProductLink = document.querySelector(".productLink");

const loading = document.querySelector(".loading");

loading.style.marginTop = "40px";

// get singel product

async function getProduct() {
  try {
    const respons = await fetch(productURL);
    const productDetail = await respons.json();

    loading.style.display = "none";

    document.title = `${productDetail.name.slice(0, 15) + "... - the garden"}`;

    if (window.innerWidth < 1024) {
      currentProductLink.innerHTML += `<a href="${window.location.href}">
      ${productDetail.name.slice(0, 15) + "..."}
      </a>`;
      productBlog.innerHTML += `<h1>${productDetail.name}</h1>
    <img class="bigimage hoverscale" id="firstimage" tabindex=0 src="${productDetail.images[0].src}" alt="${productDetail.images[0].alt}">
    ${productDetail.short_description}
    <div class="smallimage">
    <img id="secondimage" class="hoverscale" tabindex=0   src="${productDetail.images[1].src}" alt="${productDetail.images[1].alt}">
    <img id="thirdimage" class="hoverscale" tabindex=0   src="${productDetail.images[2].src}" alt="${productDetail.images[2].alt}">
    </div>
    ${productDetail.description}
    `;
    } else if (window.innerWidth > 1023) {
      currentProductLink.innerHTML += `<a href="${productURL}">
      ${productDetail.name.slice(0, 15) + "..."}
      </a>`;
      productBlog.innerHTML += `<h1>${productDetail.name}</h1>
      <div class="left">
    <img class="bigimage hoverscale" id="firstimage" tabindex=0   src="${productDetail.images[0].src}" alt="${productDetail.images[0].alt}">
    ${productDetail.short_description}
    </div>
    <div class="right">
    ${productDetail.description}
    <div class="smallimage">
    <img id="secondimage" class="hoverscale" tabindex=0   src="${productDetail.images[1].src}" alt="${productDetail.images[1].alt}">
    <img id="thirdimage" class="hoverscale" tabindex=0    src="${productDetail.images[2].src}" alt="${productDetail.images[2].alt}">
    </div>
    </div>
    `;
    }
    //Modal

    const firstImage = document.querySelector("#firstimage");
    const secondImage = document.querySelector("#secondimage");
    const thirdImage = document.querySelector("#thirdimage");
    const modalContainer = document.querySelector(".modal");
    modalContainer.style.display = "none";

    // show first image bigger
    function changeImage() {
      modalContainer.innerHTML = `<img src="${productDetail.images[0].src}" tabindex=0   alt="${productDetail.images[0].alt}">`;
      modalContainer.style.display = "flex";
    }

    firstImage.addEventListener("click", changeImage);

    // show second image bigger
    function changeSecondImage() {
      modalContainer.innerHTML = `<img src="${productDetail.images[1].src}" tabindex=0  alt="${productDetail.images[0].alt}">`;
      modalContainer.style.display = "flex";
    }

    secondImage.addEventListener("click", changeSecondImage);

    // show third image bigger
    function changeThirdImage() {
      modalContainer.innerHTML = `<img src="${productDetail.images[2].src}" tabindex=0 alt="${productDetail.images[0].alt}">`;
      modalContainer.style.display = "flex";
    }

    thirdImage.addEventListener("click", changeThirdImage);

    // remove modal
    function removeModal() {
      modalContainer.innerHTML = "";
      modalContainer.style.display = "none";
    }

    modalContainer.addEventListener("click", removeModal);
  } catch (error) {
    console.log(error);
  }
}
getProduct();
