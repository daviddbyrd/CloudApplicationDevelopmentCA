//main render function
const render = () => {
  const productContainer = document.getElementById("products");

  productContainer.innerHTML = "";
  if (isCreating) {
    const newProduct = {
      name: "",
      description: "",
      price: 0,
      available: true,
    };

    const creatingDiv = document.createElement("div");

    creatingDiv.innerHTML = `
        <b>Name: </b> <input value="${newProduct.name}" data-key="name"> <br/>
        <b>Description: </b> <input value="${newProduct.description}" data-key="description"> <br/>
        <b>Price: </b> <input value="${newProduct.price}" data-key="price"> <br/>
        <b>Available: </b> <input value="${newProduct.available}" data-key="available"> <br/>
        <button>Save Changes</button>
        <button>Cancel</button>
        <br/>
    `;

    const inputs = creatingDiv.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        newProduct[input.dataset.key] = e.target.value;
      });
    });

    const buttons = creatingDiv.querySelectorAll("button");
    buttons[0].addEventListener("click", () => createProduct(newProduct));
    buttons[1].addEventListener("click", () => cancelCreateProduct());

    productContainer.appendChild(creatingDiv);
  } else {
    const creatingDiv = document.createElement("div");
    creatingDiv.innerHTML = `
        <button>Create Product</button>
    `;
    const button = creatingDiv.querySelector("button");
    button.addEventListener("click", () => startCreateProduct());
    productContainer.appendChild(creatingDiv);
  }

  data.forEach((product) => {
    const productDiv = document.createElement("div");

    if (product.isEditing) {
      productDiv.innerHTML = `
        <b>Name: </b> <input value="${product.temp.name}" data-key="name"> <br/>
        <b>Description: </b> <input value="${product.temp.description}" data-key="description"> <br/>
        <b>Price: </b> <input value="${product.temp.price}" data-key="price"> <br/>
        <b>Available: </b> <input value="${product.temp.available}" data-key="available"> <br/>
        <button>Save Changes</button>
        <button>Cancel</button>
        <br/>
      `;

      const inputs = productDiv.querySelectorAll("input");

      inputs.forEach((input) => {
        input.addEventListener("input", (e) => {
          updateTemp(product.id, input.dataset.key, e.target.value);
        });
      });

      const buttons = productDiv.querySelectorAll("button");
      buttons[0].addEventListener("click", () => saveEdit(product.id));
      buttons[1].addEventListener("click", () => cancelEdit(product.id));
    } else {
      productDiv.innerHTML = `
        <b>Name: </b> ${product.name} <br/>
        <b>Description: </b> ${product.description} <br/>
        <b>Price: </b> ${product.price} <br/>
        <b>Available: </b> ${product.available} <br/>
        <button>Edit Product</button>
        <button>Delete Product</button>
        <br/>
      `;

      const buttons = productDiv.querySelectorAll("button");
      buttons[0].addEventListener("click", () => editProduct(product.id));
      buttons[1].addEventListener("click", () => deleteProduct(product.id));
    }
    productContainer.appendChild(productDiv);
  });
};

// fetch data from Rails Server
const loadData = async () => {
  var url = "http://localhost:3000/products";
  var response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  data = await response.json();
  data.forEach((product) => {
    product["isEditing"] = false;
    product["temp"] = {};
  });
  render();
};
// create product
const startCreateProduct = () => {
  isCreating = true;
  render();
};

const cancelCreateProduct = () => {
  isCreating = false;
  render();
};

const createProduct = async (newProduct) => {
  var url = `http://localhost:3000/products`;
  var response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  isCreating = false;
  loadData();
};

const editProduct = (id) => {
  const product = data.find((product) => product.id === id);
  product.temp = {
    name: product.name,
    description: product.description,
    price: product.price,
    available: product.available,
  };
  product.isEditing = true;
  render();
};

// to handle state change of product attributes
const updateTemp = (id, attr, val) => {
  const product = data.find((product) => product.id === id);
  product.temp[attr] = val;
};

const cancelEdit = (id) => {
  const product = data.find((product) => product.id === id);
  product.temp = {};
  product.isEditing = false;
  render();
};

const saveEdit = async (id) => {
  const product = data.find((product) => product.id === id);
  const updatedProduct = {
    name: product.temp.name,
    description: product.temp.description,
    price: product.temp.price,
    available: product.temp.available,
  };
  var url = `http://localhost:3000/products/${id}`;
  var response = await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  });
  loadData();
};

const deleteProduct = async (id) => {
  var url = `http://localhost:3000/products/${id}`;
  var response = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });
  loadData();
};

var data = [];
var isCreating = false;

window.addEventListener("DOMContentLoaded", loadData);
