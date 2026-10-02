// SIZE SELECTION

const sizes = document.querySelectorAll(".size");

sizes.forEach(size => {

    size.addEventListener("click", () => {

        sizes.forEach(item => {
            item.classList.remove("active");
        });

        size.classList.add("active");

    });

});


// QUANTITY

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const quantity = document.querySelector("#quantity");

let count = 1;

plus.addEventListener("click", () => {

    count++;

    quantity.textContent = count;

});

minus.addEventListener("click", () => {

    if (count > 1) {
        count--;
    }

    quantity.textContent = count;

});


// ADD TO BAG

const addCart = document.querySelector(".add-cart");
const cartCount = document.querySelector(".cart-btn span");

addCart.addEventListener("click", () => {

    cartCount.textContent = count;

    const originalText = addCart.textContent;

    addCart.textContent = "Added to Bag ✓";

    setTimeout(() => {

        addCart.textContent = originalText;

    }, 1400);

});