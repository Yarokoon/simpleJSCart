class Cart {
 constructor() {

 }
  createCart = () => {
       const cart = document.createElement('div');
       cart.innerHTML = `Корзина <span class = "cart__counter"> </span>`;    
       document.querySelector('.cart').append(cart);

       const cartCounter = document.querySelector('.cart__counter');
       localStorage.length !== 0 && JSON.parse(localStorage.cartObject).length !== 0 ? cartCounter.innerText = JSON.parse(localStorage.cartObject).length : 0
    }
}

export default Cart;