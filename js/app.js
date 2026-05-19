import { products } from "./products.js";

const productsContainer = document.getElementById("products-container");

/* RENDERIZAR PRODUTOS */

products.forEach((product) => {
    productsContainer.innerHTML += `
    <div class="product-card">
    <img src="${product.image}"
         alt="${product.name}"
    >

    <h4>${product.name}</h4>
    <span>${product.price}</span>

    </div>
    `
});