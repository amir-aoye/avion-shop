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

const searchParams = new URLSearchParams(location.search);
const productId = searchParams.get("id");
const mainProduct = products.find((product) => {
  return product.id === +productId;
});

let basket = [];
const getBasketFromLocal = () => {
  const localBasket = JSON.parse(localStorage.getItem("basket"));

  if (localBasket?.length) {
    basket = localBasket;
  }
};
window.getBasketFromLocal = getBasketFromLocal;

const $ = (selector) => document.querySelector(selector);
const showProductInfo = (mainProduct) => {
  const {
    name,
    price,
    description,
    mainSrc,
    features,
    dimensions: { width, height, depth },
    quantity,
  } = mainProduct;

  const mainProductImg = $(".main-product__img").firstElementChild;
  const mainProductName = $(".main-product__name");
  const mainProductPrice = mainProductName.nextElementSibling;
  const mainProductDesc = $(".main-product__desc");
  const mainProductFeatures = mainProductDesc.nextElementSibling;
  const mainProductHeight = $(".main-product__td");
  const mainProductWidth = mainProductHeight.nextElementSibling;
  const mainProductDepth =
    mainProductHeight.nextElementSibling.nextElementSibling;
  const mainProductQuantityMain = $(".main-product__quantity-main");

  document.title = name;

  mainProductImg.setAttribute("src", `../../${mainSrc}`);
  mainProductImg.setAttribute("alt", name);

  mainProductName.innerHTML = name;
  mainProductPrice.innerHTML = `£${price}`;
  mainProductDesc.innerHTML = description;

  mainProductFeatures.innerHTML = "";
  features.forEach((feature) => {
    mainProductFeatures.insertAdjacentHTML(
      "beforeend",
      `
        <li class="features-list__item">${feature}</li>
      `
    );
  });

  mainProductHeight.innerHTML = width;
  mainProductWidth.innerHTML = height;
  mainProductDepth.innerHTML = depth;
  mainProductQuantityMain.innerHTML = quantity;

  showProducts();
};

const showProducts = () => {
  const productsLikeMainProduct = products.filter((product) => {
    return product.type === mainProduct.type;
  });
  const productsWrapper = $(".products__wrapper");

  productsWrapper.innerHTML = "";
  productsLikeMainProduct.forEach((product) => {
    const { mainSrc, name, price, id } = product;

    productsWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <div class="product">
            <a
            href="./index.html?id=${id}""
            class="product__img"
            >
            <img src="../../${mainSrc}" alt="${name}" />
            </a>
            <h4 class="product__title">${name}</h4>
            <p class="product__price">£${price}</p>
        </div>
      `
    );
  });
};
window.addEventListener("load", () => showProductInfo(mainProduct));

$(".main-product__quantity-minus").addEventListener("click", () => {
  mainProduct.quantity -= 1;

  if (mainProduct.quantity < 2) {
    mainProduct.quantity = 1;
  }
  showProductInfo(mainProduct);
});

$(".main-product__quantity-plus").addEventListener("click", () => {
  mainProduct.quantity += 1;
  showProductInfo(mainProduct);
});

$(".main-product__link").addEventListener("click", () => {
  getBasketFromLocal();
  const mainProductIndex = basket.findIndex((product) => {
    return product.id === mainProduct.id;
  });

  if (mainProductIndex === -1) {
    basket.push(mainProduct);
  } else {
    basket[mainProductIndex].quantity =
      basket[mainProductIndex].quantity + mainProduct.quantity;
  }

  showToast();
  saveBasketToLocal(basket);
});

const showToast = () => {
  $(".main-product__link").disabled = true;
  const toast = $(".toast");
  const progress = $(".progress");

  toast.classList.add("toast--open");

  let progressWidth = 0;
  const progressInterval = setInterval(() => {
    progress.style.width = `${progressWidth}%`;
    progressWidth += 3;

    if (progressWidth > 110) {
      toast.classList.remove("toast--open");
      progress.style.width = `0`;
      $(".main-product__link").disabled = false;
      clearInterval(progressInterval);
    }
  }, 60);
};

const saveBasketToLocal = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};
