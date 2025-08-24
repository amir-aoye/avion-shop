const products = [
  {
    id: 1,
    name: "The Noir Loveseat",
    price: 289,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-1.png",
    description:
      "The Noir Loveseat is designed for understated elegance. Wrapped in smooth black fabric with a matte finish, it offers both comfort and style in equal measure. Its compact silhouette makes it ideal for smaller spaces, while the deep seat and supportive backrest invite you to relax and unwind.",
    features: [
      "Soft black fabric upholstery",
      "Easy to clean and maintain",
      "Solid wood frame with matte black legs",
    ],
    dimensions: {
      width: "148 cm",
      height: "82 cm",
      depth: "78 cm",
    },
    quantity: 1,
    caption: "A sleek black loveseat with clean lines and soft upholstery.",
    type: "Furniture",
  },

  {
    id: 2,
    name: "The Ebony Chair",
    price: 119,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-2.png",
    description:
      "The Ebony Chair is a refined blend of bold contrast and organic warmth. Its matte black seat, molded for ergonomic comfort, rests atop solid oak legs that bring a touch of nature indoors. Designed for versatility, it fits seamlessly into dining rooms, home offices, or boutique cafés.",
    features: [
      "Matte black polypropylene seat",
      "Lightweight yet sturdy construction",
    ],
    dimensions: {
      width: "85 cm",
      height: "48 cm",
      depth: "52 cm",
    },
    quantity: 1,
    caption: "A stylish black chair with natural wooden legs.",
    type: "Furniture",
  },

  {
    id: 3,
    name: "The Olive Mist Vase",
    price: 39,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-3.png",
    description:
      "The Olive Mist Vase brings a subtle glow to any space with its unique hue-a delicate blend of olive green and muted gold (#c9c889). Crafted from high-quality ceramic with a smooth matte glaze, it evokes the serenity of nature while adding a refined touch to modern interiors.",
    features: [
      "Matte finish with soft texture",
      "Suitable for indoor use",
      "Complements neutral, earthy, and boho palettes",
      "Hand-glazed ceramic in olive-gold tone",
    ],
    dimensions: {
      width: "24 cm",
      height: "14 cm",
      depth: "10 cm",
    },
    quantity: 1,
    caption: "A ceramic vase in soft olive-gold tones-elegant.",
    type: "Accessories",
  },

  {
    id: 4,
    name: "The Stone Whisper Vase",
    price: 32,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-4.png",
    description:
      "The Stone Whisper Vase is a celebration of simplicity and texture. Crafted from natural clay and finished in a soft gray tone, it evokes the quiet elegance of stone and soil. Its minimalist silhouette and neutral color make it a versatile piece for any interior style-from Scandinavian calm to industrial chic.",
    features: [
      "Handcrafted from natural clay",
      "Soft gray matte finish",
      "Water-resistant inner coating",
      "Ideal for modern, rustic, or boho interiors",
    ],
    dimensions: {
      width: "30 cm",
      height: "18 cm",
      depth: "12 cm",
    },
    quantity: 1,
    caption: "A handcrafted gray clay vase with a matte finish-earthy.",
    type: "Accessories",
  },

  {
    id: 5,
    name: "The Ferro Ceiling Light",
    price: 280,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-5.png",
    description:
      "The Ferro Ceiling Light is a bold nod to industrial design. Crafted from powder-coated steel with a matte finish, it delivers both durability and style. Its dome-shaped silhouette casts focused light downward, making it ideal for task lighting over counters, islands, or workstations.",
    features: [
      "Dome shape for focused illumination",
      "Compatible with E27 bulbs (LED or filament)",
      "Easy ceiling mount with concealed hardware",
    ],
    dimensions: {
      width: "38 cm",
      height: "18 cm",
      depth: "38 cm",
    },
    quantity: 1,
    caption: "A matte black metal ceiling light with industrial charm.",
    type: "Light Fittings",
  },

  {
    id: 6,
    name: "Golden Ceiling Lamp",
    price: 320,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-6.png",
    description:
      "The Golden Ceiling Lamp is a refined blend of simplicity and elegance. Crafted from metal with a soft matte gold finish, it brings warmth and balance to any space. Its minimalist design and neutral tone make it a versatile lighting piece, seamlessly fitting into interiors ranging from Scandinavian serenity to industrial edge.",
    features: [
      "Easy ceiling installation with standard fittings",
      "Made from metal with a matte gold finish",
    ],
    dimensions: {
      width: "20 cm",
      height: "40 cm",
      depth: "20 cm",
    },
    quantity: 1,
    caption: "A matte gold ceiling lamp with a clean silhouette.",
    type: "Light Fittings",
  },

  {
    id: 7,
    name: "White Cylinder Vase",
    price: 28,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-7.png",
    description:
      "The White Cylinder Vase embodies the beauty of restraint. Crafted from high-quality porcelain and finished in a smooth, matte white glaze, it offers a timeless aesthetic that complements any interior. Its tall, slender form adds vertical interest to shelves, mantels, and tabletops, while its neutral tone harmonizes with both bold and subtle décor styles.",
    features: [
      "Made from premium porcelain",
      "Suitable for fresh or dried flower",
      "Water-resistant interior coating",
      "Matte white glaze with a smooth texture",
    ],
    dimensions: {
      width: "35 cm",
      height: "14 cm",
      depth: "10 cm",
    },
    quantity: 1,
    caption: "A sleek white porcelain vase with a cylindrical silhouette.",
    type: "Accessories",
  },

  {
    id: 8,
    name: "Liverpool Swivel Stool",
    price: 89,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-8.png",
    description:
      "The Liverpool Swivel Stool blends raw materials with refined function. Its tobacco-stained wooden seat sits atop a sturdy matte black frame, offering both style and stability. With a smooth swivel mechanism and adjustable height, it adapts effortlessly to counters, islands, or high tables.",
    features: [
      "Footrest for added comfort",
      "360° swivel and height adjustment",
      "Matte black powder-coated steel frame",
    ],
    dimensions: {
      width: "42 cm",
      height: "65–80 cm",
      depth: "42 cm",
    },
    quantity: 1,
    caption: "A height-adjustable swivel stool with a solid wood seat.",
    type: "Furniture",
  },

  {
    id: 9,
    name: "The Elara Lounge Chair",
    price: 219,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-9.png",
    description:
      "The Elara Lounge Chair invites you to slow down and sink in. With its gently curved backrest, plush cushioning, and warm wooden base, it’s the perfect blend of form and function. Whether placed in a reading nook, living room, or studio corner, Elara adds a sense of calm and sophistication to any space.",
    features: [
      "Soft-touch gray fabric upholstery",
      "Ergonomic backrest for relaxed seating",
      "Durable frame with high-density foam",
      "Angled solid wood legs with natural finis",
    ],
    dimensions: {
      width: "74 cm",
      height: "82 cm",
      depth: "78 cm",
    },
    quantity: 1,
    caption: "A mid-century inspired lounge chair with soft.",
    type: "Furniture",
  },

  {
    id: 10,
    name: "The Haven Oak Chair",
    price: 139,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-10.png",
    description:
      "The Haven Oak Chair is simplicity at its finest. Crafted from solid oak with a smooth matte finish, it offers timeless elegance and sturdy comfort. Its straight back and gently curved seat make it suitable for both formal settings and relaxed environments.",
    features: [
      "Solid oak construction with natural grain",
      "Lightweight yet durable",
      "Easy to move and maintain",
    ],
    dimensions: {
      width: "46 cm",
      height: "88 cm",
      depth: "52 cm",
    },
    quantity: 1,
    caption: "A minimalist oak chair with clean lines and a natural finish.",
    type: "Furniture",
  },

  {
    id: 11,
    name: "Nest Side Table Set",
    price: 149,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-11.webp",
    description:
      "The Nest Side Table Set adds a modern touch to any living room. With warm wooden tops and sleek black metal legs, these tables offer both style and practicality. Use them together for layered decor or separately to suit your space. Their nesting design makes them perfect for compact living.",
    features: [
      "Sturdy black metal frame",
      "Ideal as side tables or accent pieces",
    ],
    dimensions: {
      width: "50 cm",
      height: "45 cm",
      depth: "50 cm",
    },
    quantity: 1,
    caption:
      "A stylish duo of nesting tables that bring warmth and versatility to your.",
    type: "Nesting Tables",
  },

  {
    id: 12,
    name: "Modern Line Metal Chair",
    price: 119,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-12.png",
    description:
      "The Modern Line Chair is built for simplicity and strength. Its powder-coated metal frame offers durability without sacrificing style, while the ergonomic seat and backrest provide comfort for long hours of sitting. Whether used around a dining table or as a standalone accent, it adds a touch of industrial elegance to any space.",
    features: [
      "Powder-coated metal in matte graphite",
      "Lightweight yet sturdy construction",
      "Easy to clean and maintain",
      "Ideal for dining rooms, cafés, and studios",
    ],
    dimensions: {
      width: "48 cm",
      height: "85 cm",
      depth: "52 cm",
    },
    quantity: 1,
    caption: "A sleek metal chair with a matte graphite finish and clean",
    type: "Furniture",
  },

  {
    id: 13,
    name: "Aura Ceiling Light Set",
    price: 189,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-13.jpg",
    description:
      "The Aura Ceiling Light Set features four evenly spaced spherical fixtures that cast a soft, inviting glow across your space. With a minimalist design and warm-toned illumination, these lights are ideal for living rooms, hallways, or cozy corners. The neutral ceiling finish complements the warm light.",
    features: [
      "Easy ceiling mount with discreet hardware",
      "Ideal for modern interiors and soft mood lighting",
      "Emits a warm ambient glow",
    ],
    dimensions: {
      width: "20 cm",
      height: "18 cm",
      depth: "20 cm",
    },
    quantity: 1,
    caption:
      "A warm, modern lighting solution that adds elegance and ambiance to any room.",
    type: "Light Fittings",
  },

  {
    id: 14,
    name: "Azure Gradient Ceramic Vase",
    price: 89,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-14.jpg",
    description:
      "The Azure Gradient Ceramic Vase is a statement piece that blends elegance with artistic flair. Its narrow neck and rounded body create a timeless silhouette, while the white-to-blue gradient evokes a watercolor effect that feels both serene and sophisticated. Perfect for displaying dried florals.",
    features: [
      "Durable and easy to clean",
      "Hand-glazed ceramic with gradient finish",
      "Ideal for shelves, consoles, or tabletop styling",
      "Smooth white top fading into textured blue base",
    ],
    dimensions: {
      width: "20 cm",
      height: "18 cm",
      depth: "20 cm",
    },
    quantity: 1,
    caption:
      "A handcrafted ceramic vase with a soothing blue gradient that brings artful calm to any.",
    type: "Accessories",
  },

  {
    id: 15,
    name: "Trio Luxe Nesting Tables",
    price: 249,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-15.webp",
    description:
      "The Trio Luxe Nesting Tables are designed to elevate contemporary interiors with their bold lines and luxurious finishes. Each table wood top paired with a gold-toned metal frame forming angular silhouettes that feel both architectural and Use them together for layered styling or separately to add cohesion across your space.",
    features: [
      "Dark wood veneer tops with smooth finish",
      "Set of three nesting tables",
    ],
    dimensions: {
      width: "60  cm",
      height: "50  cm",
      depth: "40  cm",
    },
    quantity: 1,
    caption:
      "A striking set of three nesting tables with geometric gold frames and rich wooden tops.",
    type: "Nesting Tables",
  },

  {
    id: 16,
    name: "industrial Glow Pendant Light",
    price: 179,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-16.jpg",
    description:
      "The Industrial Glow Pendant Light brings a touch of urban sophistication to your space. Featuring three exposed bulbs encased in black wireframe cages, this fixture combines raw industrial charm with contemporary elegance the sculptural design makes it a standout piece in any room.",
    features: [
      "Three suspended bulbs with geometric wire cages",
      "Emits warm, ambient lighting",
      "Black metal base with matte finis",
    ],
    dimensions: {
      width: "35 cm",
      height: "25 cm",
      depth: "27 cm",
    },
    quantity: 1,
    caption:
      "A bold ceiling fixture with geometric wireframe cages and warm illumination—perfect for modern.",
    type: "Light Fittings",
  },

  {
    id: 17,
    name: "Arch Nest Side Tables",
    price: 139,
    mainHref: "product-info-page/index.html",
    mainSrc: "assets/images/product-17.webp",
    description:
      "The Arch Nest Side Tables offer a serene blend of form and function. Crafted from natural wood with a smooth matte finish, each table features distinctive arch-shaped cutouts that add architectural interest. Perfect for Scandinavian or Japandi-inspired interiors, they nest seamlessly to save space while adding warmth and texture to your room.",
    features: [
      "Sculptural arch cutouts for visual interest",
      "Natural wood with soft grain detailing",
      "Set of two nesting tables",
    ],
    dimensions: {
      width: "50 cm",
      height: "40 cm",
      depth: "35 cm",
    },
    quantity: 1,
    caption:
      "A minimalist duo of wooden nesting tables with sculptural arch cutouts—where simplicity meets quiet elegance.",
    type: "Nesting Tables",
  },
];

const handleScrollBar = (customScroll) => {
  const scrollTop = scrollY;
  const windowHeight = innerHeight;
  const bodyHeight = document.body.clientHeight;

  const scrollValue = scrollTop / (bodyHeight - windowHeight);
  const scrollRoundedPercent = Math.floor(scrollValue * 100);

  customScroll.style.width = `${scrollRoundedPercent}%`;
};

let isSearchOpen = false;
const openOrCloseSearch = (searchWrapper, searchInput) => {
  const searchWrapperClass = searchWrapper.classList[0];
  searchInput.value = "";

  if (!isSearchOpen) {
    searchWrapper.classList.add(`${searchWrapperClass}--open`);
    isSearchOpen = true;
  } else {
    searchWrapper.classList.remove(`${searchWrapperClass}--open`);
    isSearchOpen = false;
  }
};

const showSearchResult = (searchInput, searchWrapper, resultList, pageHref) => {
  const searchValue = searchInput.value.trim().toLowerCase();
  resultList.innerHTML = "";

  if (searchValue) {
    const searchedProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchValue);
    });

    if (searchedProducts.length) {
      searchWrapper.classList.add("searching");
      searchedProducts.forEach((product) => {
        const { mainHref, id, name } = product;

        resultList.insertAdjacentHTML(
          "beforeend",
          `
            <li class="result-list__item">
              <a href="${pageHref}${mainHref}?id=${id}" class="result-list__link"
                >${name}</a
              >
            </li>
          `
        );
      });
    }
  } else {
    searchWrapper.classList.remove("searching");
  }
};

let isMenuOpen = false;
const openOrCloseMenu = (mobileMenuIcon, mobileMenuWrapper, cover) => {
  if (!isMenuOpen) {
    mobileMenuIcon.firstElementChild.setAttribute("href", "#close");
    mobileMenuWrapper.classList.add("mobile-menu-wrapper--open");
    cover.classList.add("cover--show");
    isMenuOpen = true;
  } else {
    mobileMenuIcon.firstElementChild.setAttribute("href", "#menu");
    mobileMenuWrapper.classList.remove("mobile-menu-wrapper--open");
    cover.classList.remove("cover--show");
    isMenuOpen = false;
  }
};

export { products };
export { handleScrollBar };
export { openOrCloseSearch };
export { showSearchResult };
export { openOrCloseMenu };
