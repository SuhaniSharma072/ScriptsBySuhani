const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
}

const cart = [];
const addButtons = document.querySelectorAll('.add-cart-btn');
const cartIcon = document.querySelector('.nav-icon a.cart-link i');

function updateCartCount() {
    if(cart.length > 0) {
        cartIcon.setAttribute('data-count', cart.length);
    } else {
        cartIcon.removeAttribute('data-count');
    }
}

const hearts = document.querySelectorAll('.heart-icon i');
hearts.forEach(heart => {
    heart.addEventListener('click', () => heart.classList.toggle('active'));
});

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const row = btn.closest('.row');
        const productName = row.querySelector('.price h4').innerText;
        const productPrice = row.querySelector('.price p').innerText;

        cart.push({ name: productName, price: productPrice });
        updateCartCount();
        alert(`${productName} added to cart!`);
        console.log(cart);
    });
});