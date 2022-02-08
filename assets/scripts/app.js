class Product {
  /* this can be remove here no need in constructor we
 can override here
 title = "DEFAULT";
  imageUrl;
  description;
  price; */
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

// console.log(new Product());

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];
  constructor() {}f
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
              <div>
                <img src="${prod.imageUrl}" alt="${prod.title}" >
                <div class="product-item__content">
                  <h2>${prod.title}</h2>
                  <h3>\$${prod.price}</h3>
                  <p>${prod.description}</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productLists = new ProductList();
productLists.render();
