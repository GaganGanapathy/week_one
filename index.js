const data = [
  {
    id: 1,
    title: "nike_One",
    image:
      "https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    price: 330,
    quantity: 0,
  },
  {
    id: 2,
    title: "nike_two",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHwwfDB8fHww",
    price: 200,
    quantity: 0,
  },
  {
    id: 3,
    title: "nike_three",
    image:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHwwfDB8fHww",
    price: 310,
    quantity: 0,
  },
  {
    id: 4,
    title: "nike_four",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHwwfDB8fHww",
    price: 150,
    quantity: 0,
  },
  {
    id: 5,
    title: "nike_five",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D",
    price: 70,
    quantity: 0,
  },
  {
    id: 6,
    title: "Jordan_letgoo_Boiiii",
    image:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHwwfDB8fHww",
    price: 480,
    quantity: 0,
  },
];
let cart = [];
let total = 0;
let avg = 0;

let numbers_of_items_in_cart = 0;

const products = document.querySelector(".products");
const number_of_items = document.querySelector(".number_of_items");
const modal = document.querySelector(".modal");
const summary = document.querySelector(".summary");

number_of_items.innerText = numbers_of_items_in_cart;

function PluginProductCard() {
  data.map((item, index) => {
    let notAdded = false;
    const product_detail = document.createElement("div");
    product_detail.classList.add("product_detail");

    const img = document.createElement("img");
    // img.setAttribute("height","200")
    img.src = item.image;
    img.height = "200";

    const description_section = document.createElement("div");
    description_section.classList.add("description_section");

    const tittle = document.createElement("p");
    tittle.classList.add("tittle");
    tittle.innerText = item.title;

    const description = document.createElement("div");
    description.classList.add("description");

    const price = document.createElement("div");
    price.classList.add("price");

    const price_colour = document.createElement("p");
    price_colour.classList.add("price_colour");
    price_colour.innerText = "Price:";

    const price_number = document.createElement("p");
    price_number.classList.add("price_number");
    price_number.innerText = "$" + item.price;

    price.append(price_colour);
    price.append(price_number);

    const add_to_cart = document.createElement("button");
    add_to_cart.classList.add("add_to_cart");
    add_to_cart.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart "><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>';

    add_to_cart.addEventListener("click", (e) => {
      if (!notAdded) {
        add_to_cart.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>';
        notAdded = !notAdded;
        numbers_of_items_in_cart += 1;
        cart.push({ ...item, quantity: item.quantity + 1 });
        console.log(cart);
        number_of_items.innerText = numbers_of_items_in_cart;
        calculate();
      } else {
        add_to_cart.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart "><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>';
        notAdded = !notAdded;
        numbers_of_items_in_cart = numbers_of_items_in_cart
          ? numbers_of_items_in_cart - 1
          : 0;
        number_of_items.innerText = numbers_of_items_in_cart;
        cart = cart.filter((product) => product.id !== item.id);
        console.log(cart);
        calculate();
      }
    });

    description.append(price);
    description.append(add_to_cart);

    description_section.append(tittle);
    description_section.append(description);

    product_detail.append(img);
    product_detail.append(description_section);

    products.append(product_detail);
  });
}

function openCart() {
  modal.showModal();
  if (!cart.length) {
    summary.innerHTML = "";
    const p = document.createElement("p");
    p.classList.add("font");
    p.innerText = "Your cart is empty";
    summary.append(p);
  } else {
    summary.innerHTML = "";
    cart.map((item, index) => {
      const product = document.createElement("div");
      product.classList.add("product");
      const contain = document.createElement("div");

      const tittle = document.createElement("p");
      tittle.classList.add("tittle", "font");
      tittle.innerText = item.title;

      const add_less = document.createElement("div");
      add_less.classList.add("add_less");

      const decrease = document.createElement("button");
      decrease.classList.add("decrease", "add_to_cart");
      decrease.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>';
      decrease.addEventListener("click", () => {
        item.quantity = item.quantity <= 1 ? 1 : item.quantity - 1;
        quantity.innerText = item.quantity;
        quantite.innerText = item.quantity;
        calculate();

        console.log(item.quantity);
      });

      const quantity = document.createElement("span");
      quantity.classList.add("quantity");
      quantity.style.fontSize = "x-large";
      quantity.innerText = item.quantity;

      const increase = document.createElement("button");
      increase.classList.add("increase", "add_to_cart");
      increase.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>';
      increase.addEventListener("click", () => {
        item.quantity += 1;
        quantity.innerText = item.quantity;
        quantite.innerText = item.quantity;
        calculate();
        console.log(cart);
        console.log(item.quantity);
      });

      add_less.append(decrease);
      add_less.append(quantity);
      add_less.append(increase);

      contain.append(tittle);
      contain.append(add_less);

      const p = document.createElement("p");
      p.classList.add("font");
      p.innerText = "*";

      const contain_two = document.createElement("div");
      contain_two.classList.add("contain_two");

      const quantite = document.createElement("p");
      quantite.classList.add("font", "quantity");
      quantite.innerText = item.quantity;

      const trash = document.createElement("button");
      trash.classList.add("delete", "add_to_cart");
      trash.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>';
      trash.addEventListener("click", () => {
        cart = cart.filter((product) => product.id !== item.id);
        console.log(cart);
        numbers_of_items_in_cart = numbers_of_items_in_cart
          ? numbers_of_items_in_cart - 1
          : 0;
        number_of_items.innerText = numbers_of_items_in_cart;
        calculate();
        openCart();
      });

      contain_two.append(quantite);
      contain_two.append(trash);

      product.append(contain);
      product.append(p);
      product.append(contain_two);

      summary.append(product);
    });
  }
}

function calculate() {
  let result = 0;
  if (cart.length == 0) {
    total = 0;
  } else if (cart.length == 1) {
    total = cart[0].price * cart[0].quantity;
  } else {
    total = cart.reduce(
      (acc, curr) => acc.price * acc.quantity + curr.price * curr.quantity
    );
  }
  console.log(total);
  const total_price = document.querySelector(".total_price");
  total_price.innerText = total;

  //   let num = cart.reduce((acc, curr) => acc.price*quantity + curr.price);
  //   console.log(num)
  if (cart.length == 0) {
    result = 0;
  } else if (cart.length == 1) {
    result = (cart[0].price * cart[0].quantity) / cart[0].quantity;
  } else {
    let deno = cart.reduce((acc, curr) => acc.quantity + curr.quantity);
    console.log(deno);
    result = Math.floor(total / deno);
    console.log(result);
}
const avg_price = document.querySelector(".avg_price");
avg_price.innerText = result;
}

function closeCart() {
  modal.close();
}

PluginProductCard();
