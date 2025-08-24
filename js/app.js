import {
  products,
  handleScrollBar,
  openOrCloseSearch,
  showSearchResult,
  openOrCloseMenu,
} from "../modules/main.js";

const customScroll = document.querySelector(".scrolled");
window.addEventListener("scroll", () => handleScrollBar(customScroll));

const searchIcon = document.querySelector(".search__icon");
const searchWrapper = document.querySelector(".search__wrapper");
const searchInput = document.querySelector(".search__input");
searchIcon.addEventListener("click", () =>
  openOrCloseSearch(searchWrapper, searchInput)
);
searchIcon.addEventListener("click", () =>
  showSearchResult(searchInput, searchWrapper, resultList, "pages/")
);

const resultList = document.querySelector(".result-list");
searchInput.addEventListener("keyup", () =>
  showSearchResult(searchInput, searchWrapper, resultList, "pages/")
);

const mobileSearchIcon = document.querySelector(".mobile-search__icon");
const mobileSearchWrapper = document.querySelector(".mobile-search__wrapper");
const mobileSearchInput = document.querySelector(".mobile-search__input");
mobileSearchIcon.addEventListener("click", () =>
  openOrCloseSearch(mobileSearchWrapper, mobileSearchInput)
);
mobileSearchIcon.addEventListener("click", () =>
  showSearchResult(searchInput, mobileSearchWrapper, mobileSearchInput, "pages/")
);

const mobileResultList = document.querySelector(".mobile-result-list");
mobileSearchInput.addEventListener("keyup", () =>
  showSearchResult(
    mobileSearchInput,
    mobileSearchWrapper,
    mobileResultList,
    "pages/"
  )
);

const mobileMenuIcon = document.querySelector(".mobile-menu__icon");
const mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");
const cover = document.querySelector(".cover");
mobileMenuIcon.addEventListener("click", () =>
  openOrCloseMenu(mobileMenuIcon, mobileMenuWrapper, cover)
);

const showProducts = () => {
  const productsWrapper = document.querySelector(".products__wrapper");
  const latestProducts = products.slice(-4);

  productsWrapper.innerHTML = "";
  latestProducts.forEach((product) => {
    const { id, mainHref, mainSrc, name, price } = product;

    productsWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <div class="product">
          <a href="pages/${mainHref}?id=${id}" class="product__img">
            <img src="${mainSrc}" alt="${name}" />
          </a>
          <h4 class="product__title">${name}</h4>
          <p class="product__price">£${price}</p>
        </div>
      `
    );
  });
};
window.addEventListener("load", showProducts);