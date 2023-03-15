let product = document.querySelectorAll('.product');
let cart = document.querySelector('.cart__products');



addToCard = function(id, img, count) {
  let cartProduct = Array.from(cart.querySelectorAll('.cart__product'));
  let productId = cartProduct.findIndex(e => id == e.getAttribute('data-id'));

  if (productId == -1) {
    cart.innerHTML += `
    <div class="cart__product" data-id = ${id}>
    <img class="cart__product-image" src = "${img}">
    <div class="cart__product-count">${count}</div>
    </div>
    `;
    } else {
      cartProduct[productId].querySelector('.cart__product-count').innerText = Number(cartProduct[productId].querySelector('.cart__product-count').innerText) + count;
    }
};

product.forEach(e => {

  let productAdd = e.querySelector('.product__quantity-control_inc');
  let productRemove = e.querySelector('.product__quantity-control_dec');
  let productQuantity = e.querySelector('.product__quantity-value');
  let btnAdd = e.querySelector('.product__add');
  let quantity = Number(productQuantity.innerText);
  let productId = e.getAttribute('data-id');
  let productImg = e.querySelector('.product__image').getAttribute('src');

    
  productAdd.onclick = function() {
    quantity += 1;
    productQuantity.innerText = quantity;
  }

    productRemove.onclick = function() {
      if (quantity == 1) {
        return ('Меньше нельзя');
        } else {
          quantity -=1
        }
          productQuantity.innerText = quantity;
    }  

    btnAdd.onclick = function() {
        addToCard(productId, productImg, quantity);
    }
});