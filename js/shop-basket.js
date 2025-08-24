import {
  openOrCloseSearch,
  showSearchResult,
  openOrCloseMenu,
} from "../modules/main.js";

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

let basket = [];
const getBasketFromLocal = () => {
  const localBasket = JSON.parse(localStorage.getItem("basket"));

  if (localBasket?.length) {
    basket = localBasket;
  }

  showBasketProducts(basket);
  showMobileBasketProducts(basket);
};
window.getBasketFromLocal = getBasketFromLocal;

const showBasketProducts = (mainBasket) => {
  const basketWrapper = document.querySelector(".basket__wrapper");
  basketWrapper.innerHTML = "";

  if (mainBasket.length) {
    mainBasket.forEach((product) => {
      const { mainSrc, name, caption, price, id, quantity } = product;
      const productTotalPrice = price * quantity;

      basketWrapper.insertAdjacentHTML(
        "beforeend",
        `
          <div class="product">
            <div class="product__info">
              <div class="product__img">
                <img
                  src="../../${mainSrc}"
                  alt="${name}"
                />
              </div>

              <div class="product__content">
                <h4 class="product__title">${name}</h4>
                <p class="product__desc">${caption}</p>
                <p class="product__price">£${price}</p>
              </div>
            </div>

            <div class="product__quantity">
              <button class="product__quantity-minus" onclick='decreaseProductCount(${id})'>-</button>
              <span class="product__quantity-main">${quantity}</span>
              <button class="product__quantity-plus" onclick='increaseProductCount(${id})'>+</button>
            </div>

            <div class="product__total-price">£${productTotalPrice}</div>
          </div>
        `
      );
    });
  } else {
    basketWrapper.innerHTML = `<p class="basket__empty-note">Your Basket Is Empty :(</p>`;
  }

  showTotalPrice();
  saveBasketToLocal(mainBasket);
};

const decreaseProductCount = (productId) => {
  const mainProduct = basket.find((product) => {
    return product.id === productId;
  });
  mainProduct.quantity -= 1;

  if (mainProduct.quantity < 1) {
    removeProduct(productId);
  }

  showBasketProducts(basket);
  showMobileBasketProducts(basket);
};
window.decreaseProductCount = decreaseProductCount;

const removeProduct = (productId) => {
  const mainProductIndex = basket.findIndex((product) => {
    return product.id === productId;
  });

  basket.splice(mainProductIndex, 1);
};

const increaseProductCount = (productId) => {
  const mainProduct = basket.find((product) => {
    return product.id === productId;
  });
  mainProduct.quantity += 1;

  showBasketProducts(basket);
  showMobileBasketProducts(basket);
};
window.increaseProductCount = increaseProductCount;

const showTotalPrice = () => {
  const prices = document.querySelectorAll(".product__total-price");
  const basketTotalPrice = document.querySelector(".basket__total-price h3");
  let totalPrice = 0;

  prices.forEach((price) => {
    let mainPrice = +price.innerHTML.slice(1);
    totalPrice += mainPrice;
  });

  basketTotalPrice.innerHTML = `£${totalPrice.toLocaleString()}`;
};

const saveBasketToLocal = (mainBasket) => {
  localStorage.setItem("basket", JSON.stringify(mainBasket));
};

const showMobileBasketProducts = (mainBasket) => {
  const mobileBasketWrapper = document.querySelector(".mobile-basket__wrapper");
  mobileBasketWrapper.innerHTML = "";

  if (mainBasket.length) {
    mainBasket.forEach((product) => {
      const { mainSrc, name, caption, price, id, quantity } = product;
      const productTotalPrice = price * quantity;

      mobileBasketWrapper.insertAdjacentHTML(
        "beforeend",
        `
          <div class="mobile-product">
            <div class="mobile-product__img">
              <img
                src="../../${mainSrc}"
                alt="${name}"
              />
            </div>

            <div class="mobile-product__info">
              <h4 class="mobile-product__title">${name}</h4>
              <p class="mobile-product__desc">${caption}</p>
              <p class="mobile-product__price">£${productTotalPrice}</p>

              <div class="mobile-product__quantity">
                <button class="mobile-product__quantity-minus" onclick='decreaseProductCount(${id})'>-</button>
                <span class="mobile-product__quantity-main">${quantity}</span>
                <button class="mobile-product__quantity-plus" onclick='increaseProductCount(${id})'>+</button>
              </div>
            </div>
          </div>
        `
      );
    });
  } else {
    mobileBasketWrapper.innerHTML = `<p class="basket__empty-note">Your Basket Is Empty :(</p>`;
  }

  showMobileTotalPrice();
  saveBasketToLocal(mainBasket);
};

const showMobileTotalPrice = () => {
  const prices = document.querySelectorAll(".mobile-product__price");
  const mobileBasketTotalPrice = document.querySelector(
    ".mobile-basket__total-price h3"
  );
  let totalPrice = 0;

  prices.forEach((price) => {
    let mainPrice = +price.innerHTML.slice(1);
    totalPrice += mainPrice;
  });

  mobileBasketTotalPrice.innerHTML = `£${totalPrice.toLocaleString()}`;
};
