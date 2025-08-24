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
  showSearchResult(searchInput, searchWrapper, resultList, "../../pages/")
);

const resultList = document.querySelector(".result-list");
searchInput.addEventListener("keyup", () =>
  showSearchResult(searchInput, searchWrapper, resultList, "../../pages/")
);

const mobileSearchIcon = document.querySelector(".mobile-search__icon");
const mobileSearchWrapper = document.querySelector(".mobile-search__wrapper");
const mobileSearchInput = document.querySelector(".mobile-search__input");
mobileSearchIcon.addEventListener("click", () =>
  openOrCloseSearch(mobileSearchWrapper, mobileSearchInput)
);
mobileSearchIcon.addEventListener("click", () =>
  showSearchResult(
    searchInput,
    mobileSearchWrapper,
    mobileSearchInput,
    "../../pages/"
  )
);

const mobileResultList = document.querySelector(".mobile-result-list");
mobileSearchInput.addEventListener("keyup", () =>
  showSearchResult(
    mobileSearchInput,
    mobileSearchWrapper,
    mobileResultList,
    "../../pages/"
  )
);

const mobileMenuIcon = document.querySelector(".mobile-menu__icon");
const mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");
const cover = document.querySelector(".cover");
mobileMenuIcon.addEventListener("click", () =>
  openOrCloseMenu(mobileMenuIcon, mobileMenuWrapper, cover)
);

const filtersBtn = document.querySelector(".filters");
let isFiltersMenuOpen = false;
const openOrCloseFiltersMenu = () => {
  if (!isFiltersMenuOpen) {
    filtersBtn.classList.add("filters--open");
    isFiltersMenuOpen = true;
  } else {
    filtersBtn.classList.remove("filters--open");
    isFiltersMenuOpen = false;
  }
};
filtersBtn.addEventListener("click", openOrCloseFiltersMenu);

const typeMenuInput = document.querySelectorAll(".type-menu-input");
const priceMenuInput = document.querySelectorAll(".price-menu-input");
const sortingSelect = document.querySelector("#sorting-select");

let filters = {};
let filteredProducts = [...products];

const setFilteredProducts = (filters) => {
  filteredProducts = [...products];

  for (let filter in filters) {
    switch (filter) {
      case "type": {
        if (filters[filter] !== "all products") {
          filteredProducts = filteredProducts.filter((product) =>
            product.type.toLowerCase().includes(filters[filter])
          );
        }
        break;
      }

      case "price": {
        if (filters[filter] === "0 - 100") {
          filteredProducts = filteredProducts.filter((product) => {
            if (product.price < 101) {
              return product;
            }
          });
        } else if (filters[filter] === "101 - 250") {
          filteredProducts = filteredProducts.filter((product) => {
            if (product.price > 101 && product.price < 251) {
              return product;
            }
          });
        } else if (filters[filter] === "250 +") {
          filteredProducts = filteredProducts.filter((product) => {
            if (product.price > 251) {
              return product;
            }
          });
        }
        break;
      }

      case "sort": {
        if (filters[filter] === "Cheapest") {
          filteredProducts = filteredProducts.sort((prevValue, currValue) => {
            return prevValue.price - currValue.price;
          });
        } else if (filters[filter] === "Expensivest") {
          filteredProducts = filteredProducts.sort((prevValue, currValue) => {
            return prevValue.price - currValue.price;
          });
          filteredProducts.reverse();
        } else if (filters[filter] === "Newest") {
          filteredProducts = filteredProducts.reverse();
        }
        break;
      }
    }
  }

  showProducts(filteredProducts);
};

typeMenuInput.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      filters.type = input.value.toLowerCase();
      setFilteredProducts(filters);
    }
  });
});

priceMenuInput.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      filters.price = input.value;
      setFilteredProducts(filters);
    }
  });
});

sortingSelect.addEventListener("change", () => {
  filters.sort = sortingSelect.value;
  setFilteredProducts(filters);
});

const showProducts = (mainProducts) => {
  const productsWrapper = document.querySelector(".products");
  productsWrapper.innerHTML = "";

  if (mainProducts.length) {
    mainProducts.forEach((product) => {
      const { mainHref, id, mainSrc, name, price } = product;

      productsWrapper.insertAdjacentHTML(
        "beforeend",
        `
          <div class="product">
            <a href="../${mainHref}?id=${id}" class="product__img">
              <img src="../../${mainSrc}" alt="${name}" />
            </a>
  
            <h4 class="product__title">${name}</h4>
  
            <p class="product__price">£${price}</p>
          </div>
        `
      );
    });
  } else {
    productsWrapper.innerHTML = `<p class="products__note">Nothing Found !</p>`;
  }
};
window.addEventListener("load", () => showProducts(filteredProducts));
