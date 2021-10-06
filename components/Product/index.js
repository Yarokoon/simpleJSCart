class Product  {

constructor (id, title, body, containerToAppend) {
    // ------------ inner params to create product
    this.id = id;
    this.title = title;
    this.body = body;  
    // ------------ create product item 
    this.product = document.createElement('article');
    this.product.classList.add('product');
    this.product.dataset.id = this.id;
    this.product.innerHTML = `
    <h3 class = "post__title">${title}</h3>
    <p>${body}</p>
    <button data-add = "${id}" class = "add__to_cart_btn">In cart</button>
   `;
 

    // ----------- get container to append products
    this.containerToAppend = containerToAppend;
    this.appendProduct(this.containerToAppend);
    // ----------- empty array to store cart data
    this.arrayToSet = [];
    // ----------- get add to cart button
    this.addToCartBtn = this.product.querySelector('.add__to_cart_btn');
    this.productTitle = this.product.querySelector('.post__title');
    this.productBody = this.product.querySelector('p');
    // ----------- add to cart action function 
    this.addToCartAction(this.addToCartBtn, this.arrayToSet);
    
}

 
// Append products in container that was declared
appendProduct = (containerToAppend) => {
    containerToAppend.append(this.product);
}

addToCartAction = (button, arrayToSet) => {
    const cartCounter = document.querySelector('.cart__counter');

    button.addEventListener('click', (e) => {

        if(localStorage.length === 0) {

            arrayToSet.push({id: e.target.dataset.add, title: this.productTitle.innerText, body: this.productBody.innerText })
            localStorage.setItem('cartObject', JSON.stringify(arrayToSet));
            cartCounter.innerText = JSON.parse(localStorage.cartObject).length;
            
        } else {
            arrayToSet = JSON.parse(localStorage.getItem('cartObject'));
            arrayToSet.push({id: e.target.dataset.add, title: this.productTitle.innerText, body: this.productBody.innerText});
            localStorage.setItem('cartObject', JSON.stringify(arrayToSet));
            cartCounter.innerText = JSON.parse(localStorage.cartObject).length;
        }
    });
}
 

}
export default Product;