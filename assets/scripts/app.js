class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}
class ShoppingCart {
  items = [];
  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
    return sum;
  }
  /* static */ addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTMLf = ` <h2>Total :\$${this.totalAmount}</h2>`;
  }
  
  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
    <h2>Total :\$${0}</h2>
    <button>Order Now</button>`;

    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}
class ProductItem {
  constructor(product) {
    this.product = product;
    // console.log(this.product);
  }

  addToCart() {
    console.log("Addinng product to cart....");
    console.log(this.product);
    // this.ShoppingCart.addProduct();
    App.addProductToCart(this.product);
  }
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
                  <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}" >
                    <div class="product-item__content">
                      <h2>${this.product.title}</h2>
                      <h3>\$${this.product.price}</h3>
                      <p>${this.product.description}</p>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

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
  constructor() {}
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();

      prodList.append(prodEl);
    }
    return prodList;
    // renderHook.append(prodList);
  }
}

/* here we are combine the function of cart and product  */
class Shop {
  render() {
   /*  const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodListEl); */
    this.cart = new ShoppingCart('app');
    this.cart.render();
    const productList = new ProductList('app');
    productList.render();
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
