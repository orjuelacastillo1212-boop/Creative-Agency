const cartCount = document.querySelector(".cart-count");
const cartButton = document.querySelector(".cart-button");
const toast = document.querySelector(".toast");
let itemsInCart = 0;
let toastTimeout;

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    itemsInCart += 1;
    cartCount.textContent = itemsInCart;
    cartButton.setAttribute("aria-label", `Carrito, ${itemsInCart} productos`);

    toast.textContent = `${button.dataset.product} agregado a tu bolsa`;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
  });
});